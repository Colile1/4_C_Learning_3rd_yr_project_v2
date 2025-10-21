import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PageHeader = ({ lesson, learningPath }) => {
  const navigate = useNavigate();

  return (
    <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lessons
          </Button>
          
          <div className="flex items-center gap-4">
            <div className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${learningPath.color} text-white`}>
              {learningPath.icon} {learningPath.name}
            </div>
            <div className="text-sm text-gray-400">
              Lesson {lesson.id} of 30
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;