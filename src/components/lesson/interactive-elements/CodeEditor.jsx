import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const handleRun = () => {
    setOutput(`Simulating execution...\nOutput for:\n${code}\n\n(Note: This is a simulated output. Full C++ compilation is not available in this environment.)`);
    toast({
      title: "Code Executed (Simulated)",
      description: "Displaying simulated output below the editor.",
    });
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
  };

  return (
    <div className="space-y-4">
      <CodeMirror
        value={code}
        height="200px"
        theme={okaidia}
        onChange={(value) => setCode(value)}
        className="rounded-lg overflow-hidden border border-slate-700"
      />
      <div className="flex gap-2">
        <Button onClick={handleRun} className="w-full bg-green-600 hover:bg-green-700">
          <Play className="w-4 h-4 mr-2" />
          Run
        </Button>
        <Button onClick={handleReset} variant="outline" className="w-full">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
      {output && (
        <div className="mt-4">
          <h5 className="font-semibold mb-2 text-yellow-300">Output:</h5>
          <pre className="code-block text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;