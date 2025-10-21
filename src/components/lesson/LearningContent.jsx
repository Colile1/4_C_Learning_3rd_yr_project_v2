import React from 'react';
import VisualContent from '@/components/lesson/learning-styles/VisualContent';
import HandsOnContent from '@/components/lesson/learning-styles/HandsOnContent';
import TheoreticalContent from '@/components/lesson/learning-styles/TheoreticalContent';
import InteractiveContent from '@/components/lesson/learning-styles/InteractiveContent';

const LearningContent = ({ lesson, learningType }) => {
  const renderContent = () => {
    switch (learningType) {
      case 'visual':
        return <VisualContent lesson={lesson} />;
      case 'hands-on':
        return <HandsOnContent lesson={lesson} />;
      case 'theoretical':
        return <TheoreticalContent lesson={lesson} />;
      case 'interactive':
        return <InteractiveContent lesson={lesson} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      {renderContent()}
    </div>
  );
};

export default LearningContent;