import React from 'react';

const LessonHeader = ({ lesson }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
          {lesson.difficulty}
        </div>
        <span className="text-gray-400">•</span>
        <span className="text-gray-400">{lesson.duration}</span>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 gradient-text">
        {lesson.title}
      </h1>
      
      <p className="text-xl text-gray-300 leading-relaxed">
        {lesson.description}
      </p>
    </div>
  );
};

export default LessonHeader;