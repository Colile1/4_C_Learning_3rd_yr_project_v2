import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const CodeChallenge = ({ challenge }) => {
  if (!challenge) {
    return <p className="text-gray-400">No code challenge available for this lesson.</p>;
  }

  const initialCode = `#include <iostream>
using namespace std;

int main() {
    // Your code here
    
    return 0;
}`;

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg text-purple-300">{challenge.title}</h4>
      <p className="text-gray-300">{challenge.description}</p>
      <CodeEditor initialCode={initialCode} />
    </div>
  );
};

export default CodeChallenge;