import React from 'react';
import { BookOpen } from 'lucide-react';

const TheoreticalContent = ({ lesson }) => {
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-purple-400" />
          <h3 className="text-2xl font-semibold">Deep Theoretical Understanding</h3>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-xl font-medium text-purple-300">Core Concepts</h4>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {lesson.description}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-blue-300">Key Topics Covered</h5>
              <ul className="space-y-2">
                {lesson.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-green-300">Real-World Applications</h5>
              <div className="glass-effect rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed">{lesson.realWorldUse}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-lg font-medium text-yellow-300">Code Analysis</h5>
            <div className="code-block">
              <pre className="text-yellow-400 whitespace-pre-wrap">{lesson.practiceCode}</pre>
            </div>
            <p className="text-gray-300 leading-relaxed">{lesson.codeExplanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalContent;