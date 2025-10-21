import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Brain, Target, Users, ChevronRight } from 'lucide-react';

const AssessmentIntro = ({ onNext }) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl mb-6">🎯</div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Learning Style Assessment
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover your optimal learning approach for programming education.
          This comprehensive assessment combines validated psychometric instruments
          with programming-specific scenarios to deliver highly accurate recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-effect rounded-lg p-6">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">45 Minutes</h3>
            <p className="text-sm text-gray-400">Complete assessment time</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">5 Components</h3>
            <p className="text-sm text-gray-400">Comprehensive evaluation</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">73 Questions</h3>
            <p className="text-sm text-gray-400">Detailed analysis</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">4 Learning Styles</h3>
            <p className="text-sm text-gray-400">Personalized results</p>
          </div>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What You'll Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="font-medium text-blue-400 mb-2">Primary Learning Style</h3>
              <p className="text-sm text-gray-300">
                Whether you learn best through visual diagrams, auditory explanations,
                reading/writing, or hands-on practice.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-purple-400 mb-2">Confidence Level</h3>
              <p className="text-sm text-gray-300">
                How strongly you prefer your primary style over others,
                helping determine if you're a specialist or multimodal learner.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-green-400 mb-2">Personalized Path</h3>
              <p className="text-sm text-gray-300">
                Custom learning recommendations and curriculum adjustments
                based on your unique profile.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-orange-400 mb-2">Study Strategies</h3>
              <p className="text-sm text-gray-300">
                Specific techniques and tools that will maximize your
                learning effectiveness in programming.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notes</h3>
          <ul className="text-sm text-gray-300 text-left space-y-2">
            <li>• There are no right or wrong answers - choose what feels most natural</li>
            <li>• Be honest about your preferences for the most accurate results</li>
            <li>• You can pause and resume the assessment anytime</li>
            <li>• Your responses are anonymous and used only for personalization</li>
          </ul>
        </div>

        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
        >
          Begin Assessment
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AssessmentIntro;
