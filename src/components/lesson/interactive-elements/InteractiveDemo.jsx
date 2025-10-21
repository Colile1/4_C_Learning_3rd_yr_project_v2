import React, { useState, useEffect } from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play } from 'lucide-react';

const DemoHelloWorld = () => {
  const [name, setName] = useState('World');
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput(`Hello, ${name}!`);
  };

  return (
    <div>
      <p className="mb-4 text-gray-400">Change the name and run the code to see the output.</p>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-3 py-2 glass-effect rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button onClick={runCode} className="bg-green-600 hover:bg-green-700">
          <Play className="w-4 h-4 mr-2" /> Run
        </Button>
      </div>
      <div className="code-block p-4">
        <pre className="text-green-400 whitespace-pre-wrap">
          {`#include <iostream>

int main() {
    std::cout << "${output}" << std::endl;
    return 0;
}`}
        </pre>
      </div>
    </div>
  );
};

const DemoVariables = () => {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(5.9);
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput(`Age: ${age}\nHeight: ${height.toFixed(1)}`);
  };

  return (
    <div>
      <p className="mb-4 text-gray-400">Adjust the sliders and run the code to see the variable values.</p>
      <div className="space-y-4 mb-4">
        <div>
          <label className="text-gray-300">Age: {age}</label>
          <Slider defaultValue={[25]} max={100} step={1} onValueChange={(value) => setAge(value[0])} />
        </div>
        <div>
          <label className="text-gray-300">Height: {height.toFixed(1)}</label>
          <Slider defaultValue={[5.9]} max={7} step={0.1} onValueChange={(value) => setHeight(value[0])} />
        </div>
      </div>
      <Button onClick={runCode} className="w-full bg-green-600 hover:bg-green-700 mb-4">
        <Play className="w-4 h-4 mr-2" /> Run
      </Button>
      <div className="code-block p-4">
        <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};

const DemoConditionals = () => {
  const [score, setScore] = useState(85);
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (score >= 90) setGrade('A');
    else if (score >= 80) setGrade('B');
    else if (score >= 70) setGrade('C');
    else setGrade('F');
  }, [score]);

  return (
    <div>
      <p className="mb-4 text-gray-400">Move the slider to change the score and see the grade update in real-time.</p>
      <div className="space-y-4 mb-4">
        <div>
          <label className="text-gray-300">Score: {score}</label>
          <Slider defaultValue={[85]} max={100} step={1} onValueChange={(value) => setScore(value[0])} />
        </div>
      </div>
      <div className="code-block p-4">
        <pre className="text-green-400 whitespace-pre-wrap">
          {`int score = ${score};
char grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

// Resulting Grade: ${grade}`}
        </pre>
      </div>
    </div>
  );
};

const InteractiveDemo = ({ lesson }) => {
  const renderDemo = () => {
    switch (lesson.id) {
      case 1:
        return <DemoHelloWorld />;
      case 2:
        return <DemoVariables />;
      case 3:
        return <DemoConditionals />;
      default:
        return <p className="text-gray-400">Interactive demo for this lesson is coming soon!</p>;
    }
  };

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="gradient-text text-2xl">Interactive Demo: {lesson.title}</DialogTitle>
        <DialogDescription>
          {lesson.description}
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        {renderDemo()}
      </div>
    </DialogContent>
  );
};

export default InteractiveDemo;