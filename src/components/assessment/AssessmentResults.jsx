import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, BookOpen, Code, Users, Target, Award, ArrowRight } from 'lucide-react';

const AssessmentResults = ({ results, onStartLearning }) => {
  if (!results) return null;

  const { primaryStyle, primaryScore, secondaryStyle, secondaryScore, allScores, confidence, learningProfile } = results;

  const learningPaths = {
    'Visual': {
      name: 'Visual Learning Path',
      icon: '👁️',
      color: 'from-blue-500 to-cyan-500',
      description: 'Learn through diagrams, flowcharts, and visual representations',
      pathId: 'visual'
    },
    'Auditory': {
      name: 'Interactive Learning Path',
      icon: '🎮',
      color: 'from-orange-500 to-red-500',
      description: 'Engage with quizzes, games, and interactive content',
      pathId: 'interactive'
    },
    'Reading': {
      name: 'Theoretical Learning Path',
      icon: '📚',
      color: 'from-purple-500 to-violet-500',
      description: 'Deep dive into concepts with detailed explanations and theory',
      pathId: 'theoretical'
    },
    'Kinesthetic': {
      name: 'Hands-On Learning Path',
      icon: '🛠️',
      color: 'from-green-500 to-emerald-500',
      description: 'Learn by doing with interactive coding exercises and projects',
      pathId: 'hands-on'
    }
  };

  const primaryPath = learningPaths[primaryStyle];
  const secondaryPath = learningPaths[secondaryStyle];

  const getConfidenceColor = (confidence) => {
    if (confidence >= 20) return 'text-green-400';
    if (confidence >= 10) return 'text-yellow-400';
    return 'text-blue-400';
  };

  const getConfidenceLabel = (confidence) => {
    if (confidence >= 20) return 'Strong Preference';
    if (confidence >= 10) return 'Moderate Preference';
    return 'Multimodal Learner';
  };

  const sortedScores = Object.entries(allScores).sort(([,a], [,b]) => b - a);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Assessment Complete!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Based on your responses, we've analyzed your learning preferences across multiple dimensions.
          Here's your personalized learning profile.
        </p>

        {/* Primary Learning Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 mb-8 border border-purple-500/20"
        >
          <div className="text-5xl mb-4">{primaryPath.icon}</div>
          <h2 className="text-3xl font-bold mb-2 gradient-text">{primaryPath.name}</h2>
          <p className="text-gray-300 mb-4">{primaryPath.description}</p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{primaryScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-400">Primary Score</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getConfidenceColor(confidence)}`}>
                {confidence.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400">Confidence</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">
            <Award className="w-4 h-4" />
            <span className="font-medium">{getConfidenceLabel(confidence)}</span>
          </div>
        </motion.div>

        {/* Learning Style Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/50 rounded-xl p-6 mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Your Learning Style Scores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sortedScores.map(([style, score], index) => (
              <div key={style} className="text-center">
                <div className={`text-3xl mb-2 ${index === 0 ? 'animate-pulse' : ''}`}>
                  {learningPaths[style].icon}
                </div>
                <div className="text-lg font-semibold mb-1">{style}</div>
                <div className="text-2xl font-bold text-purple-400">{score.toFixed(1)}%</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-slate-800/50 rounded-xl p-6 mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Recommended Learning Strategies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-3 text-green-400">What Works Best for You</h4>
              <ul className="space-y-2 text-gray-300">
                {primaryStyle === 'Visual' && (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Use diagrams, flowcharts, and visual aids</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Watch video tutorials with code demonstrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Create mind maps for complex concepts</span>
                    </li>
                  </>
                )}
                {primaryStyle === 'Auditory' && (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Listen to programming podcasts and lectures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Discuss concepts with peers or mentors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Explain code aloud to reinforce understanding</span>
                    </li>
                  </>
                )}
                {primaryStyle === 'Reading' && (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Read comprehensive documentation and books</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Take detailed notes and write summaries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Study academic papers and technical articles</span>
                    </li>
                  </>
                )}
                {primaryStyle === 'Kinesthetic' && (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Practice coding exercises and projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Use interactive coding environments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Build and refactor code through experimentation</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Additional Tips</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>Combine your primary style with secondary preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Review material using multiple approaches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>Apply concepts immediately through practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Join communities that match your learning style</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Start Learning Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            onClick={() => onStartLearning(primaryPath.pathId)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg mb-4"
          >
            Start Learning with {primaryPath.name}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-sm text-gray-400">
            This will take you to the lesson selection page with your preferred learning path pre-selected.
          </p>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 p-4 bg-slate-800/30 rounded-lg"
        >
          <p className="text-sm text-gray-400">
            <strong>Note:</strong> Learning styles can evolve over time. We recommend retaking this assessment
            every 6-12 months to ensure your learning path continues to match your preferences.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AssessmentResults;
