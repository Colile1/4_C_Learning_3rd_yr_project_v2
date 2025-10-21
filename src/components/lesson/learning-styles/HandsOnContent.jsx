import React from 'react';
import { Code } from 'lucide-react';
import CodeEditor from '@/components/lesson/interactive-elements/CodeEditor';
import PracticeChallenges from '@/components/lesson/interactive-elements/PracticeChallenges';

const HandsOnContent = ({ lesson }) => {
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-green-400" />
          <h3 className="text-2xl font-semibold">Hands-On Practice</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-green-300">Interactive Code Editor</h4>
            <CodeEditor initialCode={lesson.practiceCode} />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-blue-300">Code Explanation</h4>
            <div className="glass-effect rounded-lg p-4 h-40 overflow-y-auto">
              <p className="text-gray-300 leading-relaxed">{lesson.codeExplanation}</p>
            </div>
            
            {lesson.practiceChallenges && lesson.practiceChallenges.length > 0 && (
              <PracticeChallenges challenges={lesson.practiceChallenges} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOnContent;