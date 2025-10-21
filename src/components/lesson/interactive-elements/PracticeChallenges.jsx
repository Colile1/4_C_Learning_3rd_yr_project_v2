import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PracticeChallenges = ({ challenges }) => {
  const [completed, setCompleted] = useState([]);

  const handleComplete = (index) => {
    if (completed.includes(index)) return;
    setCompleted([...completed, index]);
    toast({
      title: "Challenge Complete!",
      description: `Great job on "${challenges[index].title}"!`,
      className: "bg-green-600 border-green-600 text-white",
    });
  };

  return (
    <div className="space-y-2">
      <h5 className="font-medium text-yellow-300">Practice Challenges:</h5>
      <div className="space-y-2">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex items-center gap-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => handleComplete(index)}
              disabled={completed.includes(index)}
            >
              {completed.includes(index) ? (
                <Check className="w-4 h-4 mr-2 text-green-400" />
              ) : (
                <Lightbulb className="w-4 h-4 mr-2" />
              )}
              {challenge.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeChallenges;