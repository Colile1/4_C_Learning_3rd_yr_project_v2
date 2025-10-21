import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = ({ lesson }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);

  useEffect(() => {
    resetQuiz();
  }, [lesson]);

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowQuizResult(true);
    
    let scoreIncrement = 0;
    if (answerIndex === lesson.quiz[currentQuizIndex].correct) {
      setQuizScore(prev => prev + 1);
      scoreIncrement = 1;
    }
    
    setTimeout(() => {
      if (currentQuizIndex < lesson.quiz.length - 1) {
        setCurrentQuizIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowQuizResult(false);
        setCompletedQuestions(prev => prev + 1);
      } else {
        setCompletedQuestions(lesson.quiz.length);
        toast({
          title: "Quiz Complete!",
          description: `You scored ${quizScore + scoreIncrement} out of ${lesson.quiz.length}`,
          duration: 5000,
        });
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowQuizResult(false);
    setQuizScore(0);
    setCompletedQuestions(0);
  };

  return (
    <div className="mb-8">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            Knowledge Check
          </h2>
          <div className="text-sm text-gray-400">
            Question {Math.min(currentQuizIndex + 1, lesson.quiz.length)} of {lesson.quiz.length}
          </div>
        </div>
        
        <div className="progress-bar mb-6">
          <div 
            className="progress-fill" 
            style={{ width: `${(completedQuestions / lesson.quiz.length) * 100}%` }}
          ></div>
        </div>

        {completedQuestions < lesson.quiz.length ? (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">
              {lesson.quiz[currentQuizIndex].question}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lesson.quiz[currentQuizIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showQuizResult && handleQuizAnswer(index)}
                  disabled={showQuizResult}
                  className={`quiz-option text-left ${
                    showQuizResult
                      ? index === lesson.quiz[currentQuizIndex].correct
                        ? 'border-green-400 bg-green-400/20'
                        : index === selectedAnswer
                        ? 'border-red-400 bg-red-400/20'
                        : ''
                      : selectedAnswer === index
                      ? 'border-blue-400 bg-blue-400/20'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      showQuizResult && index === lesson.quiz[currentQuizIndex].correct
                        ? 'border-green-400 bg-green-400'
                        : showQuizResult && index === selectedAnswer && index !== lesson.quiz[currentQuizIndex].correct
                        ? 'border-red-400 bg-red-400'
                        : 'border-gray-400'
                    }`}>
                      {showQuizResult && index === lesson.quiz[currentQuizIndex].correct && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                      {showQuizResult && index === selectedAnswer && index !== lesson.quiz[currentQuizIndex].correct && (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-semibold">Quiz Complete!</h3>
            <p className="text-gray-300">
              You scored {quizScore} out of {lesson.quiz.length} questions correctly.
            </p>
            <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700">
              Retake Quiz
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;