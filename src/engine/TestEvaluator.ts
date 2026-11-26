import { Mission, TestCase } from '../types/mission';
import { pythonRuntime, PythonRunResponse } from './PythonRuntime';

export interface TestResultItem {
  id: string;
  description: string;
  passed: boolean;
  expected: string;
  actual: string;
  error?: string;
}

export interface EvaluationOutcome {
  allPassed: boolean;
  results: TestResultItem[];
  stdout: string;
  stderr: string;
  executionError?: string;
  friendlyError?: string;
  durationMs: number;
}

export class TestEvaluator {
  public static async evaluateMission(
    mission: Mission,
    userCode: string,
    providedInputs?: string[]
  ): Promise<EvaluationOutcome> {
    const results: TestResultItem[] = [];
    let overallStdout = '';
    let overallStderr = '';
    let executionError: string | undefined = undefined;
    let friendlyError: string | undefined = undefined;
    let totalDuration = 0;

    // Run test cases
    for (const testCase of mission.testCases) {
      const inputs = providedInputs && providedInputs.length > 0 
        ? providedInputs 
        : (testCase.inputs || []);

      // If test case defines a hidden test script (e.g. testing functions or classes)
      const testScript = testCase.testScript;

      const runRes: PythonRunResponse = await pythonRuntime.runCode(
        userCode,
        inputs,
        testScript,
        8000
      );

      totalDuration += runRes.durationMs;
      if (!overallStdout) overallStdout = runRes.stdout;
      if (!overallStderr) overallStderr = runRes.stderr;

      if (!runRes.success) {
        executionError = runRes.error;
        friendlyError = runRes.friendlyError;
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed: false,
          expected: testCase.expectedOutput || 'Successful code execution without errors',
          actual: runRes.stdout ? `Output:\n${runRes.stdout}\nError:\n${runRes.error}` : (runRes.error || 'Execution failed'),
          error: runRes.friendlyError || runRes.error
        });
        // If compilation/syntax/runtime error, remaining tests will likely fail too
        continue;
      }

      // Check test case type
      let passed = false;
      const actualOutput = runRes.stdout.trim();
      const expectedOutput = (testCase.expectedOutput || '').trim();

      if (testCase.type === 'output_exact') {
        // Compare lines trimmed
        const actualLines = actualOutput.split(/\r?\n/).map(l => l.trimEnd()).join('\n');
        const expectedLines = expectedOutput.split(/\r?\n/).map(l => l.trimEnd()).join('\n');
        passed = actualLines === expectedLines;
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed,
          expected: expectedLines,
          actual: actualLines || '(No output produced)'
        });
      } else if (testCase.type === 'output_contains') {
        // Must contain expected string or phrases
        passed = actualOutput.toLowerCase().includes(expectedOutput.toLowerCase());
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed,
          expected: `Must contain: "${expectedOutput}"`,
          actual: actualOutput || '(No output produced)'
        });
      } else if (testCase.type === 'output_lines') {
        // Expected multiple specific lines
        const expectedItems = expectedOutput.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        const actualLower = actualOutput.toLowerCase();
        passed = expectedItems.every(exp => actualLower.includes(exp.toLowerCase()));
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed,
          expected: expectedOutput,
          actual: actualOutput || '(No output produced)'
        });
      } else if (testCase.type === 'behavior_test') {
        // Behavior verified via testScript execution returning or printing 'TEST_PASSED'
        const testOut = (runRes.testOutput || '').trim();
        const combined = (runRes.stdout + '\n' + testOut).trim();
        passed = testOut === 'TEST_PASSED' || combined.includes('TEST_PASSED');
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed,
          expected: testCase.expectedOutput || 'Verification assertions must pass',
          actual: passed ? 'All assertions passed' : (testOut || runRes.stdout || 'Assertions failed')
        });
      } else {
        // Generic fallback
        passed = actualOutput.length > 0;
        results.push({
          id: testCase.id,
          description: testCase.description,
          passed,
          expected: 'Valid execution',
          actual: actualOutput
        });
      }
    }

    const allPassed = results.length > 0 && results.every(r => r.passed);

    return {
      allPassed,
      results,
      stdout: overallStdout,
      stderr: overallStderr,
      executionError,
      friendlyError,
      durationMs: totalDuration
    };
  }
}
