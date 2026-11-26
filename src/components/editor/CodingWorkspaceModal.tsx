import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useGameStore } from '../../store/gameStore';
import { Mission } from '../../types/mission';
import { TestEvaluator, TestResultItem } from '../../engine/TestEvaluator';
import { pythonRuntime } from '../../engine/PythonRuntime';
import { OutputConsole } from './OutputConsole';
import { LearningExplanationPanel } from './LearningExplanationPanel';
import { soundEngine } from '../../engine/SoundEngine';
import confetti from 'canvas-confetti';
import { 
  Play, 
  CheckCircle, 
  RotateCcw, 
  HelpCircle, 
  X, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ChevronRight,
  Loader2 
} from 'lucide-react';

export const CodingWorkspaceModal: React.FC = () => {
  const { 
    isCodingWorkspaceOpen, 
    activeMission, 
    closeMission, 
    completeMission, 
    completedMissions,
    settings 
  } = useGameStore();

  const [code, setCode] = useState('');
  const [stdout, setStdout] = useState('');
  const [stderr, setStderr] = useState('');
  const [friendlyError, setFriendlyError] = useState<string | undefined>();
  const [testResults, setTestResults] = useState<TestResultItem[]>([]);
  const [allPassed, setAllPassed] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'console' | 'learning'>('console');
  const [hintLevel, setHintLevel] = useState(0); // 0 = none, 1 = concept, 2 = syntax, 3 = solution
  const [inputs, setInputs] = useState<string[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const [runtimeStatus, setRuntimeStatus] = useState<'uninitialized' | 'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const unsub = pythonRuntime.subscribe((status) => {
      setRuntimeStatus(status);
    });
    return () => {
      unsub();
    };
  }, []);

  // Initialize mission code
  useEffect(() => {
    if (activeMission) {
      setCode(activeMission.starterCode);
      setStdout('');
      setStderr('');
      setFriendlyError(undefined);
      setTestResults([]);
      setAllPassed(false);
      setHasRun(false);
      setHintLevel(0);
      setShowVictory(false);
      
      // Check if test cases provide default inputs
      const defaultInputs = activeMission.testCases[0]?.inputs || [];
      setInputs(defaultInputs);

      // Warm up python runtime
      pythonRuntime.init();
    }
  }, [activeMission]);

  if (!isCodingWorkspaceOpen || !activeMission) return null;

  const requiredInputCount = activeMission.testCases[0]?.inputs?.length || 
    (activeMission.challenge.includes('input(') ? 1 : 0);

  const handleInputChange = (idx: number, val: string) => {
    const updated = [...inputs];
    updated[idx] = val;
    setInputs(updated);
  };

  const handleRunOnly = async () => {
    soundEngine.playButton();
    setIsRunning(true);
    setHasRun(true);
    setActiveTab('console');

    const res = await pythonRuntime.runCode(code, inputs);
    setIsRunning(false);

    setStdout(res.stdout);
    setStderr(res.stderr);
    setFriendlyError(res.friendlyError);

    if (res.success) {
      soundEngine.playCoin();
    } else {
      soundEngine.playError();
    }
  };

  const handleSubmitAndTest = async () => {
    soundEngine.playButton();
    setIsRunning(true);
    setHasRun(true);
    setActiveTab('console');

    const evalResult = await TestEvaluator.evaluateMission(activeMission, code, inputs);
    setIsRunning(false);

    setStdout(evalResult.stdout);
    setStderr(evalResult.stderr);
    setFriendlyError(evalResult.friendlyError);
    setTestResults(evalResult.results);
    setAllPassed(evalResult.allPassed);

    if (evalResult.allPassed) {
      setShowVictory(true);
      soundEngine.playMissionSuccess();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      // Update store rewards
      completeMission(activeMission.id, activeMission.xpReward, activeMission.coinReward);
    } else {
      soundEngine.playError();
    }
  };

  const handleResetCode = () => {
    soundEngine.playButton();
    if (confirm('Reset your editor back to the starter code?')) {
      setCode(activeMission.starterCode);
      setStdout('');
      setStderr('');
      setFriendlyError(undefined);
      setTestResults([]);
      setHasRun(false);
    }
  };

  const handleNextHint = () => {
    soundEngine.playButton();
    setHintLevel(lvl => Math.min(3, lvl + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-6xl h-[92vh] bg-white rounded-3xl shadow-card border border-quest-border flex flex-col overflow-hidden animate-scaleUp">
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 border-b border-quest-border bg-quest-cream/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base shadow-xs">
              ⚔️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 leading-tight">
                  {activeMission.title}
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  {activeMission.difficulty}
                </span>
                {completedMissions.includes(activeMission.id) && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    ✓ Completed
                  </span>
                )}
                {runtimeStatus === 'ready' && (
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Python Engine Ready
                  </span>
                )}
                {runtimeStatus === 'loading' && (
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Loader2 className="w-2.5 h-2.5 animate-spin text-amber-600" />
                    Igniting Python...
                  </span>
                )}
              </div>
              <p className="text-xs text-quest-text-muted">
                Mission {activeMission.missionNumber} • Reward: +{activeMission.xpReward} XP & +{activeMission.coinReward} Coins
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={closeMission}
            title="Close Workspace"
            className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quest Challenge Prompt Bar */}
        <div className="px-5 py-3 bg-amber-50/70 border-b border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="text-xs text-amber-950 font-medium leading-relaxed">
            <strong className="text-amber-900 font-bold uppercase tracking-wider mr-1.5">Quest Objective:</strong>
            {activeMission.challenge}
          </div>

          {/* Tab Switcher (Console vs Learning Guide) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-quest-border shrink-0">
            <button
              onClick={() => {
                soundEngine.playButton();
                setActiveTab('console');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'console' 
                  ? 'bg-amber-100 text-amber-900 shadow-2xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Console & Tests</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playButton();
                setActiveTab('learning');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'learning' 
                  ? 'bg-amber-100 text-amber-900 shadow-2xs' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Concept Guide</span>
            </button>
          </div>
        </div>

        {/* Hint Box (if triggered) */}
        {hintLevel > 0 && (
          <div className="px-5 py-2.5 bg-yellow-50 border-b border-yellow-200 text-xs text-yellow-900 flex items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="font-bold">💡 Hint {hintLevel}/3:</span>
              <span>{activeMission.hints[hintLevel - 1]}</span>
            </div>
            {hintLevel < 3 && (
              <button
                onClick={handleNextHint}
                className="text-[11px] font-bold text-amber-800 underline hover:text-amber-950 shrink-0 cursor-pointer"
              >
                Need stronger hint?
              </button>
            )}
          </div>
        )}

        {/* Main Work Area (Split: Monaco Code Editor on Left, Output/Guide on Right) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0 overflow-hidden">
          {/* Left Column: Monaco Editor (7 cols) */}
          <div className="md:col-span-7 flex flex-col border-b md:border-b-0 md:border-r border-quest-border bg-white min-h-[300px]">
            <div className="flex-1 min-h-0 relative">
              <Editor
                height="100%"
                defaultLanguage="python"
                value={code}
                onChange={(val) => setCode(val || '')}
                theme="vs" // Premium Light Theme
                options={{
                  fontSize: settings.codeFontSize || 15,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  tabSize: 4,
                  insertSpaces: true,
                  automaticLayout: true,
                  fontFamily: "'Fira Code', 'Consolas', monospace",
                  cursorBlinking: 'smooth',
                  renderLineHighlight: 'all',
                }}
                loading={
                  <div className="flex items-center justify-center h-full gap-2 text-xs text-gray-500 font-mono">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                    <span>Loading Arcane Monaco Workspace...</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Right Column: Console / Learning Guide (5 cols) */}
          <div className="md:col-span-5 flex flex-col bg-quest-bg min-h-0 overflow-hidden">
            {activeTab === 'console' ? (
              <OutputConsole
                stdout={stdout}
                stderr={stderr}
                friendlyError={friendlyError}
                results={testResults}
                allPassed={allPassed}
                hasRun={hasRun}
                inputs={inputs}
                onInputChange={handleInputChange}
                requiredInputCount={requiredInputCount}
              />
            ) : (
              <LearningExplanationPanel concept={activeMission.concept} />
            )}
          </div>
        </div>

        {/* Victory Celebration Card if all tests passed */}
        {showVictory && (
          <div className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">
                🎉
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">
                  Spell Cast Successfully!
                </h4>
                <p className="text-xs text-white/90">
                  {activeMission.successMessage}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={closeMission}
                className="px-4 py-2 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-sm cursor-pointer"
              >
                Return to 3D World
              </button>
            </div>
          </div>
        )}

        {/* Bottom Actions Bar */}
        <div className="px-5 py-3.5 bg-quest-cream/50 border-t border-quest-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetCode}
              title="Reset Code"
              className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-quest-border text-gray-600 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleNextHint}
              title="Get Hint"
              className="px-3 py-2 rounded-xl bg-white hover:bg-gray-100 border border-quest-border text-amber-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Hint ({hintLevel}/3)</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Run Code (stdout preview) */}
            <button
              onClick={handleRunOnly}
              disabled={isRunning}
              className="px-4 py-2 rounded-xl bg-white hover:bg-gray-50 border border-quest-border text-gray-800 font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 text-emerald-700" />}
              <span>Run Code</span>
            </button>

            {/* Submit & Test */}
            <button
              onClick={handleSubmitAndTest}
              disabled={isRunning}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:brightness-105 text-white font-bold text-xs shadow-glow-gold hover:shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
              <span>Submit & Test Spell</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
