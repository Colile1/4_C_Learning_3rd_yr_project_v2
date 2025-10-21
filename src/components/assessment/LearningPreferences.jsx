import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const LearningPreferences = ({ onNext, onBack, data }) => {
  const [responses, setResponses] = useState(data || {});

  const questions = [
    {
      id: 1,
      question: "When learning new programming concepts, I prefer to see:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 2,
      question: "I learn best when I can discuss ideas with others:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 3,
      question: "I need to read detailed explanations to understand programming concepts:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 4,
      question: "I learn programming best by doing hands-on coding exercises:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 5,
      question: "Visual aids like diagrams and flowcharts help me understand code:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 6,
      question: "I prefer listening to explanations rather than reading them:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 7,
      question: "I need to write things down to remember programming concepts:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 8,
      question: "I learn best when I can experiment and try things myself:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 9,
      question: "Pictures and diagrams are important for my learning:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 10,
      question: "I learn more when I can talk things through with someone:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 11,
      question: "I prefer reading books and articles about programming:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 12,
      question: "I need to practice coding to really understand it:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 13,
      question: "I learn best when I can move around and do things physically:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 14,
      question: "I remember things better when I can see them:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    },
    {
      id: 15,
      question: "I learn best in group discussions:",
      scale: "Strongly Disagree to Strongly Agree",
      reverse: false
    }
  ];

  const handleRatingChange = (questionId, rating) => {
    setResponses({
      ...responses,
      [`q${questionId}`]: rating
    });
  };

  const handleNext = () => {
    // Check if all questions are answered
    const allAnswered = questions.every(q => responses[`q${q.id}`] !== undefined);
    if (allAnswered) {
      onNext(responses);
    }
  };

  const handlePrevious = () => {
    onBack();
  };

  const progress = (Object.keys(responses).length / questions.length) * 100;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 gradient-text">Learning Preferences</h2>
        <p className="text-gray-300 mb-4">
          Part 3 of 5: Rate your agreement with learning preference statements
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>~5-7 minutes</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {Object.keys(responses).length} of {questions.length} completed
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-slate-700/30 rounded-lg p-6"
          >
            <p className="text-white mb-4 font-medium">{question.question}</p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Strongly Disagree</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(question.id, rating)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      responses[`q${question.id}`] === rating
                        ? 'border-purple-500 bg-purple-500 text-white'
                        : 'border-slate-500 hover:border-slate-400 text-gray-400 hover:text-white'
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
              <span className="text-sm text-gray-400">Strongly Agree</span>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={Object.keys(responses).length < questions.length}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
        >
          Complete Preferences
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default LearningPreferences;
