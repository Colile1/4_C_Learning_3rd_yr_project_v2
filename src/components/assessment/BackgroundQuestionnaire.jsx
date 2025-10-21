import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const BackgroundQuestionnaire = ({ onNext, onBack, data }) => {
  const [responses, setResponses] = useState(data || {});

  const questions = [
    {
      id: 1,
      question: "What is your current level of programming experience?",
      type: "select",
      options: [
        "Beginner (just started learning)",
        "Intermediate (completed a few projects)",
        "Advanced (professional experience)",
        "Expert (teaching/leading development)"
      ]
    },
    {
      id: 2,
      question: "How many programming languages are you comfortable with?",
      type: "select",
      options: [
        "1 language",
        "2 languages",
        "3-4 languages",
        "5+ languages"
      ]
    },
    {
      id: 3,
      question: "What has been your most successful learning experience so far?",
      type: "select",
      options: [
        "Watching demonstrations",
        "Listening to explanations",
        "Reading detailed materials",
        "Hands-on practice"
      ]
    },
    {
      id: 4,
      question: "How do you typically study for programming exams or certifications?",
      type: "select",
      options: [
        "Creating visual study aids",
        "Group study sessions",
        "Reading textbooks/notes",
        "Practice coding problems"
      ]
    },
    {
      id: 5,
      question: "When working on a group programming project, what's your preferred role?",
      type: "select",
      options: [
        "Creating diagrams/wireframes",
        "Leading discussions/meetings",
        "Writing documentation",
        "Implementing core features"
      ]
    },
    {
      id: 6,
      question: "How do you approach solving a new programming problem?",
      type: "select",
      options: [
        "Draw it out or visualize",
        "Talk it through with someone",
        "Research and read about it",
        "Try different approaches"
      ]
    },
    {
      id: 7,
      question: "What type of programming resources do you use most often?",
      type: "select",
      options: [
        "Video tutorials",
        "Podcasts/audio content",
        "Written documentation",
        "Interactive coding platforms"
      ]
    },
    {
      id: 8,
      question: "How do you prefer to receive feedback on your code?",
      type: "select",
      options: [
        "Annotated screenshots",
        "Verbal code review",
        "Written comments",
        "Pair programming session"
      ]
    },
    {
      id: 9,
      question: "What's your preferred way to debug a program?",
      type: "select",
      options: [
        "Visual debugging tools",
        "Discussing with others",
        "Reading error messages",
        "Trial and error testing"
      ]
    },
    {
      id: 10,
      question: "How do you best retain new programming concepts?",
      type: "select",
      options: [
        "Creating visual diagrams",
        "Teaching others",
        "Writing summaries",
        "Building projects"
      ]
    },
    {
      id: 11,
      question: "What frustrates you most when learning programming?",
      type: "select",
      options: [
        "Lack of visual examples",
        "Poor audio/video quality",
        "Incomplete documentation",
        "Not enough practice opportunities"
      ]
    },
    {
      id: 12,
      question: "How do you celebrate mastering a new programming skill?",
      type: "select",
      options: [
        "Creating a visual portfolio piece",
        "Sharing with friends/colleagues",
        "Writing a blog post/tutorial",
        "Building something new with it"
      ]
    }
  ];

  const handleResponseChange = (questionId, response) => {
    setResponses({
      ...responses,
      [`q${questionId}`]: response
    });
  };

  const handleNext = () => {
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
        <h2 className="text-3xl font-bold mb-2 gradient-text">Background Information</h2>
        <p className="text-gray-300 mb-4">
          Part 5 of 5: Personal background and learning history
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>~3-5 minutes</span>
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

            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleResponseChange(question.id, option)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    responses[`q${question.id}`] === option
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:bg-slate-700/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                      responses[`q${question.id}`] === option
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-slate-500'
                    }`}>
                      {responses[`q${question.id}`] === option && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              ))}
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
          Complete Assessment
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default BackgroundQuestionnaire;
