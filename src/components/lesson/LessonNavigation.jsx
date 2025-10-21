import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';

const LessonNavigation = ({ lesson, learningType }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={() => lesson.id > 1 ? navigate(`/lesson/${lesson.id - 1}/${learningType}`) : null}
        disabled={lesson.id === 1}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous Lesson
      </Button>
      
      <Button
        onClick={() => lesson.id < 30 ? navigate(`/lesson/${lesson.id + 1}/${learningType}`) : toast({ title: "More lessons coming soon! please wait for next update. " })}
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
      >
        Next Lesson
        <ArrowLeft className="w-4 h-4 rotate-180" />
      </Button>
    </div>
  );
};

export default LessonNavigation;