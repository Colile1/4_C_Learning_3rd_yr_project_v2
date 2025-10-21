import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const VARKQuestionnaire = ({ onNext, onBack, data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(data || {
    Visual: [],
    Auditory: [],
    Reading: [],
    Kinesthetic: []
  });

  const questions = [
    {
      id: 1,
      question: "When you want to learn how to use a new programming IDE or development tool, you prefer to:",
      options: [
        { text: "Watch a video demonstration showing all the features", style: "Visual" },
        { text: "Listen to someone explain how to use it while you follow along", style: "Auditory" },
        { text: "Read the written documentation and user manual", style: "Reading" },
        { text: "Download it and learn by experimenting with the features yourself", style: "Kinesthetic" }
      ]
    },
    {
      id: 2,
      question: "When trying to understand a new programming concept (like object-oriented programming), you learn best from:",
      options: [
        { text: "Diagrams, flowcharts, and visual representations", style: "Visual" },
        { text: "A lecture or podcast explaining the concept", style: "Auditory" },
        { text: "Reading textbooks, articles, or written tutorials", style: "Reading" },
        { text: "Writing actual code examples and practicing the concept", style: "Kinesthetic" }
      ]
    },
    {
      id: 3,
      question: "When you encounter a difficult bug in your code, you prefer to:",
      options: [
        { text: "Look at error visualizations, stack traces, or debug output displays", style: "Visual" },
        { text: "Discuss the problem with someone who can talk through possible solutions", style: "Auditory" },
        { text: "Read through documentation and error messages carefully", style: "Reading" },
        { text: "Try different solutions and experiment until you find what works", style: "Kinesthetic" }
      ]
    },
    {
      id: 4,
      question: "You're starting to learn Python. Which approach appeals to you most?",
      options: [
        { text: "Following along with color-coded code examples and syntax diagrams", style: "Visual" },
        { text: "Attending live lectures or watching video tutorials with narration", style: "Auditory" },
        { text: "Reading through a comprehensive Python textbook or guide", style: "Reading" },
        { text: "Building small projects and learning through hands-on practice", style: "Kinesthetic" }
      ]
    },
    {
      id: 5,
      question: "You need to remember the syntax for a complex function. You would:",
      options: [
        { text: "Visualize the code structure and syntax highlighting in your mind", style: "Visual" },
        { text: "Repeat the syntax out loud or hear someone explain it", style: "Auditory" },
        { text: "Write down the syntax multiple times or read examples", style: "Reading" },
        { text: "Type the function repeatedly until it becomes muscle memory", style: "Kinesthetic" }
      ]
    },
    {
      id: 6,
      question: "A teacher is explaining a sorting algorithm. You understand it best when they:",
      options: [
        { text: "Draw diagrams showing how elements move through each step", style: "Visual" },
        { text: "Verbally describe the process and logic behind each step", style: "Auditory" },
        { text: "Provide written pseudocode or detailed step-by-step text", style: "Reading" },
        { text: "Let you implement it yourself and see the results", style: "Kinesthetic" }
      ]
    },
    {
      id: 7,
      question: "After completing a project, you'd like feedback. You prefer:",
      options: [
        { text: "Annotated screenshots or diagrams highlighting improvements", style: "Visual" },
        { text: "A discussion where someone talks through your code with you", style: "Auditory" },
        { text: "Written comments and detailed review notes in the code", style: "Reading" },
        { text: "Pair programming where you fix issues together in real-time", style: "Kinesthetic" }
      ]
    },
    {
      id: 8,
      question: "To learn about linked lists, binary trees, or graphs, you prefer:",
      options: [
        { text: "Animated visualizations showing how data is stored and accessed", style: "Visual" },
        { text: "Audio explanations of how the structures work", style: "Auditory" },
        { text: "Reading detailed descriptions with written examples", style: "Reading" },
        { text: "Implementing the structures yourself from scratch", style: "Kinesthetic" }
      ]
    },
    {
      id: 9,
      question: "When preparing for a programming exam, you:",
      options: [
        { text: "Create visual study aids like mind maps and flowcharts", style: "Visual" },
        { text: "Study with a group discussing concepts aloud", style: "Auditory" },
        { text: "Read through your notes and textbook chapters", style: "Reading" },
        { text: "Practice coding problems and work through exercises", style: "Kinesthetic" }
      ]
    },
    {
      id: 10,
      question: "When learning to use a new library or API, you prefer:",
      options: [
        { text: "Example code snippets with syntax highlighting and structure", style: "Visual" },
        { text: "Video tutorials explaining how to use the API", style: "Auditory" },
        { text: "Comprehensive written documentation with descriptions", style: "Reading" },
        { text: "Experimenting with the API by writing test code", style: "Kinesthetic" }
      ]
    },
    {
      id: 11,
      question: "When you get a compilation or runtime error, you:",
      options: [
        { text: "Look at the error location highlighted in the IDE", style: "Visual" },
        { text: "Explain the problem to someone (or a rubber duck) verbally", style: "Auditory" },
        { text: "Carefully read the error message and related documentation", style: "Reading" },
        { text: "Make changes and re-run the code to test different solutions", style: "Kinesthetic" }
      ]
    },
    {
      id: 12,
      question: "To understand design patterns (like Singleton, Factory, Observer), you prefer:",
      options: [
        { text: "UML diagrams and visual representations of class relationships", style: "Visual" },
        { text: "Someone explaining when and why to use each pattern", style: "Auditory" },
        { text: "Reading pattern descriptions and use case examples", style: "Reading" },
        { text: "Implementing the patterns in actual projects", style: "Kinesthetic" }
      ]
    },
    {
      id: 13,
      question: "When working on a group coding project, you contribute best by:",
      options: [
        { text: "Creating diagrams, wireframes, or visual documentation", style: "Visual" },
        { text: "Participating in discussions and brainstorming sessions", style: "Auditory" },
        { text: "Writing detailed specifications and code documentation", style: "Reading" },
        { text: "Diving into the code and building features hands-on", style: "Kinesthetic" }
      ]
    },
    {
      id: 14,
      question: "To learn Git commands and version control concepts, you prefer:",
      options: [
        { text: "Graphical Git visualization tools showing branch structures", style: "Visual" },
        { text: "A team member explaining Git workflows verbally", style: "Auditory" },
        { text: "Reading Git documentation and command references", style: "Reading" },
        { text: "Using Git commands directly and learning from experience", style: "Kinesthetic" }
      ]
    },
    {
      id: 15,
      question: "At a programming conference or workshop, you get the most value from:",
      options: [
        { text: "Slide presentations with code examples and visual aids", style: "Visual" },
        { text: "Speakers presenting and discussing concepts", style: "Auditory" },
        { text: "Written handouts, articles, and resource materials", style: "Reading" },
        { text: "Hands-on coding workshops and live demonstrations", style: "Kinesthetic" }
      ]
    },
    {
      id: 16,
      question: "When taking an online programming course, you prefer courses that emphasize:",
      options: [
        { text: "High-quality video demonstrations with visual code execution", style: "Visual" },
        { text: "Clear audio explanations and lectures", style: "Auditory" },
        { text: "Comprehensive written lessons and reading materials", style: "Reading" },
        { text: "Interactive coding exercises and projects", style: "Kinesthetic" }
      ]
    }
  ];

  const handleOptionSelect = (optionIndex) => {
    const selectedOption = questions[currentQuestion].options[optionIndex];
    const newResponses = { ...responses };

    // Remove previous selections for this question if any
    Object.keys(newResponses).forEach(style => {
      newResponses[style] = newResponses[style].filter(qId => qId !== currentQuestion + 1);
    });

    // Add the new selection
    newResponses[selectedOption.style].push(currentQuestion + 1);

    setResponses(newResponses);
  };

  const isOptionSelected = (optionIndex) => {
    const selectedOption = questions[currentQuestion].options[optionIndex];
    return responses[selectedOption.style].includes(currentQuestion + 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext(responses);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 gradient-text">VARK Questionnaire</h2>
        <p className="text-gray-300 mb-4">
          Part 1 of 5: Basic sensory preference identification
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>~8-10 minutes</span>
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
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <div className="bg-slate-700/30 rounded-lg p-6 mb-6">
          <p className="text-lg text-white mb-6">{currentQ.question}</p>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  isOptionSelected(index)
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:bg-slate-700/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 ${
                    isOptionSelected(index)
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-slate-500'
                  }`}>
                    {isOptionSelected(index) && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                    )}
                  </div>
                  <span className="text-sm">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-6">
          <p><strong>Note:</strong> You may select multiple options if they all apply to you.</p>
        </div>
      </motion.div>

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {currentQuestion === 0 ? 'Back to Intro' : 'Previous'}
        </Button>

        <Button
          onClick={handleNext}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
        >
          {currentQuestion === questions.length - 1 ? 'Complete VARK' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default VARKQuestionnaire;
