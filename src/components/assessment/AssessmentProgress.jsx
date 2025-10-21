import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

const AssessmentProgress = ({ currentStep, totalSteps, steps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold gradient-text">Assessment Progress</h2>
        <span className="text-gray-400">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="flex items-center">
              {index < currentStep ? (
                <CheckCircle className="w-8 h-8 text-green-500" />
              ) : index === currentStep ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </motion.div>
              ) : (
                <Circle className="w-8 h-8 text-gray-600" />
              )}
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-2 ${
                    index < currentStep ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                />
              )}
            </div>
            <span
              className={`text-xs mt-2 text-center max-w-20 ${
                index <= currentStep ? 'text-white' : 'text-gray-500'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentProgress;
