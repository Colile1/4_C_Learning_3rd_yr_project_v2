import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, Play, RotateCcw } from 'lucide-react';

const InteractiveExercises = ({ onNext, onBack, data }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseData, setExerciseData] = useState(data || {});
  const [currentTask, setCurrentTask] = useState(0);

  const exercises = [
    {
      id: 1,
      title: "Code Pattern Recognition",
      description: "Look at different code patterns and identify which learning style they appeal to most.",
      tasks: [
        {
          type: "pattern_match",
          content: {
            code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Visual: Tree diagram of recursive calls
// Auditory: "Each call branches into two more calls..."
// Reading: "Recursive function that calls itself"
// Kinesthetic: "Try calling fibonacci(5) and trace execution"`,
            question: "Which explanation would help you understand this recursive function best?"
          },
          options: [
            { text: "A visual tree diagram showing the recursive calls", style: "Visual" },
            { text: "Someone explaining how each call creates two more calls", style: "Auditory" },
            { text: "Reading about recursive functions and their properties", style: "Reading" },
            { text: "Tracing through the function manually with pen and paper", style: "Kinesthetic" }
          ]
        },
        {
          type: "pattern_match",
          content: {
            code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}`,
            question: "How do you best understand inheritance and method overriding?"
          },
          options: [
            { text: "Class hierarchy diagrams showing parent-child relationships", style: "Visual" },
            { text: "Explanations of how subclasses inherit and can modify behavior", style: "Auditory" },
            { text: "Reading definitions of inheritance and polymorphism", style: "Reading" },
            { text: "Creating my own classes and experimenting with inheritance", style: "Kinesthetic" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Problem-Solving Approach",
      description: "Choose how you'd approach solving a programming problem.",
      tasks: [
        {
          type: "approach_select",
          content: {
            problem: "You need to implement a function that reverses a string in C++.",
            question: "What's your first instinct when approaching this problem?"
          },
          options: [
            { text: "Sketch out the algorithm visually or draw a diagram", style: "Visual" },
            { text: "Talk through the logic with someone or explain it aloud", style: "Auditory" },
            { text: "Look up string manipulation functions in documentation", style: "Reading" },
            { text: "Open an IDE and start experimenting with different approaches", style: "Kinesthetic" }
          ]
        },
        {
          type: "approach_select",
          content: {
            problem: "Debug a program that crashes when processing large arrays.",
            question: "How do you start debugging this issue?"
          },
          options: [
            { text: "Use debugger visualizations to inspect memory and variables", style: "Visual" },
            { text: "Discuss the problem with colleagues to get different perspectives", style: "Auditory" },
            { text: "Read error messages and stack traces carefully", style: "Reading" },
            { text: "Add print statements and test different array sizes", style: "Kinesthetic" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Learning Environment Preference",
      description: "Select your preferred learning environment and tools.",
      tasks: [
        {
          type: "environment_select",
          content: {
            question: "When learning a new framework or library, you prefer:"
          },
          options: [
            { text: "Video tutorials with live coding demonstrations", style: "Visual" },
            { text: "Podcasts or recorded lectures explaining concepts", style: "Auditory" },
            { text: "Official documentation and API references", style: "Reading" },
            { text: "Interactive coding sandboxes and playgrounds", style: "Kinesthetic" }
          ]
        },
        {
          type: "environment_select",
          content: {
            question: "For understanding complex algorithms, you benefit most from:"
          },
          options: [
            { text: "Animated algorithm visualizations and step-through tools", style: "Visual" },
            { text: "Lectures breaking down the algorithm logic", style: "Auditory" },
            { text: "Algorithm textbooks and academic papers", style: "Reading" },
            { text: "Implementing the algorithm from scratch", style: "Kinesthetic" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Memory and Recall",
      description: "How do you best remember and recall programming concepts?",
      tasks: [
        {
          type: "memory_select",
          content: {
            question: "To remember the syntax for a complex language feature, you:"
          },
          options: [
            { text: "Create visual mind maps or syntax diagrams", style: "Visual" },
            { text: "Repeat the syntax aloud or record yourself saying it", style: "Auditory" },
            { text: "Write it down multiple times or keep reference notes", style: "Reading" },
            { text: "Type it repeatedly until it becomes muscle memory", style: "Kinesthetic" }
          ]
        },
        {
          type: "memory_select",
          content: {
            question: "When reviewing code you've written, you prefer to:"
          },
          options: [
            { text: "Use code visualization tools or syntax highlighters", style: "Visual" },
            { text: "Have someone else review it and discuss improvements", style: "Auditory" },
            { text: "Read through it carefully and check against best practices", style: "Reading" },
            { text: "Run it, test edge cases, and refactor interactively", style: "Kinesthetic" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Error Handling and Debugging",
      description: "Choose your preferred approach to handling errors and debugging.",
      tasks: [
        {
          type: "debug_select",
          content: {
            question: "When you encounter a compilation error, you first:"
          },
          options: [
            { text: "Look at the error location in the IDE and examine the code visually", style: "Visual" },
            { text: "Ask someone for help or search for the error message online", style: "Auditory" },
            { text: "Read the error message carefully and look up documentation", style: "Reading" },
            { text: "Try different fixes and see what works through experimentation", style: "Kinesthetic" }
          ]
        },
        {
          type: "debug_select",
          content: {
            question: "To understand why a program behaves unexpectedly, you:"
          },
          options: [
            { text: "Use debugger tools to step through and visualize execution", style: "Visual" },
            { text: "Explain the problem to someone to clarify your thinking", style: "Auditory" },
            { text: "Add detailed logging and analyze the output text", style: "Reading" },
            { text: "Modify the code and run tests to isolate the issue", style: "Kinesthetic" }
          ]
        }
      ]
    }
  ];

  const handleTaskResponse = (taskIndex, response) => {
    const exerciseId = exercises[currentExercise].id;
    const taskId = taskIndex + 1;

    setExerciseData({
      ...exerciseData,
      [`exercise_${exerciseId}_task_${taskId}`]: response
    });
  };

  const handleNext = () => {
    const currentEx = exercises[currentExercise];
    const allTasksAnswered = currentEx.tasks.every((_, index) =>
      exerciseData[`exercise_${currentEx.id}_task_${index + 1}`] !== undefined
    );

    if (allTasksAnswered) {
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setCurrentTask(0);
      } else {
        // Calculate exercise scores
        const scores = calculateExerciseScores();
        onNext(scores);
      }
    }
  };

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setCurrentTask(0);
    } else {
      onBack();
    }
  };

  const calculateExerciseScores = () => {
    const scores = { Visual: 0, Auditory: 0, Reading: 0, Kinesthetic: 0 };

    exercises.forEach(exercise => {
      exercise.tasks.forEach((task, taskIndex) => {
        const response = exerciseData[`exercise_${exercise.id}_task_${taskIndex + 1}`];
        if (response !== undefined) {
          const selectedOption = task.options[response];
          if (selectedOption) {
            scores[selectedOption.style] += 1;
          }
        }
      });
    });

    // Normalize to 0-100 scale
    const maxScore = exercises.length * 2; // 5 exercises × 2 tasks each
    return {
      visualScore: (scores.Visual / maxScore) * 100,
      auditoryScore: (scores.Auditory / maxScore) * 100,
      readingScore: (scores.Reading / maxScore) * 100,
      kinestheticScore: (scores.Kinesthetic / maxScore) * 100
    };
  };

  const currentEx = exercises[currentExercise];
  const progress = ((currentExercise + 1) / exercises.length) * 100;
  const tasksCompleted = currentEx.tasks.filter((_, index) =>
    exerciseData[`exercise_${currentEx.id}_task_${index + 1}`] !== undefined
  ).length;
  const taskProgress = (tasksCompleted / currentEx.tasks.length) * 100;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 gradient-text">Interactive Exercises</h2>
        <p className="text-gray-300 mb-4">
          Part 4 of 5: Hands-on learning preference assessment
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>~8-10 minutes</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm text-gray-400">
          Exercise {currentExercise + 1} of {exercises.length}: {currentEx.title}
        </p>
        <div className="w-full bg-slate-600 rounded-full h-1 mt-2">
          <motion.div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${taskProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <motion.div
        key={currentExercise}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <div className="bg-slate-700/30 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">{currentEx.title}</h3>
          <p className="text-gray-300 mb-4">{currentEx.description}</p>

          <div className="space-y-6">
            {currentEx.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="border-t border-slate-600 pt-4 first:border-t-0 first:pt-0">
                <div className="mb-4">
                  {task.type === 'pattern_match' && task.content.code && (
                    <pre className="bg-slate-800 p-4 rounded-lg mb-4 overflow-x-auto">
                      <code className="text-green-400 text-sm">{task.content.code}</code>
                    </pre>
                  )}
                  <p className="text-white font-medium">{task.content.question}</p>
                </div>

                <div className="space-y-2">
                  {task.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleTaskResponse(taskIndex, optionIndex)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        exerciseData[`exercise_${currentEx.id}_task_${taskIndex + 1}`] === optionIndex
                          ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                          : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:bg-slate-700/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 ${
                          exerciseData[`exercise_${currentEx.id}_task_${taskIndex + 1}`] === optionIndex
                            ? 'border-purple-500 bg-purple-500'
                            : 'border-slate-500'
                        }`}>
                          {exerciseData[`exercise_${currentEx.id}_task_${taskIndex + 1}`] === optionIndex && (
                            <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                          )}
                        </div>
                        <span className="text-sm">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {currentExercise === 0 ? 'Previous' : 'Previous Exercise'}
        </Button>

        <Button
          onClick={handleNext}
          disabled={tasksCompleted < currentEx.tasks.length}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
        >
          {currentExercise === exercises.length - 1 ? 'Complete Exercises' : 'Next Exercise'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveExercises;
