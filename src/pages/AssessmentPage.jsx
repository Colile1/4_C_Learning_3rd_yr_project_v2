import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import AssessmentIntro from '@/components/assessment/AssessmentIntro';
import VARKQuestionnaire from '@/components/assessment/VARKQuestionnaire';
import ProgrammingScenarios from '@/components/assessment/ProgrammingScenarios';
import LearningPreferences from '@/components/assessment/LearningPreferences';
import InteractiveExercises from '@/components/assessment/InteractiveExercises';
import BackgroundQuestionnaire from '@/components/assessment/BackgroundQuestionnaire';
import AssessmentResults from '@/components/assessment/AssessmentResults';
import AssessmentProgress from '@/components/assessment/AssessmentProgress';

const AssessmentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({
    vark: {},
    scenarios: {},
    preferences: {},
    exercises: {},
    background: {}
  });
  const [results, setResults] = useState(null);

  const steps = [
    { id: 'intro', title: 'Introduction', component: AssessmentIntro },
    { id: 'vark', title: 'VARK Questionnaire', component: VARKQuestionnaire },
    { id: 'scenarios', title: 'Programming Scenarios', component: ProgrammingScenarios },
    { id: 'preferences', title: 'Learning Preferences', component: LearningPreferences },
    { id: 'exercises', title: 'Interactive Exercises', component: InteractiveExercises },
    { id: 'background', title: 'Background Info', component: BackgroundQuestionnaire },
    { id: 'results', title: 'Your Results', component: AssessmentResults }
  ];

  const handleNext = (stepData) => {
    if (stepData) {
      setAssessmentData(prev => ({
        ...prev,
        [steps[currentStep].id]: stepData
      }));
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Calculate results using the algorithm from the design
    const calculatedResults = calculateLearningStyle(assessmentData);
    setResults(calculatedResults);
    setCurrentStep(steps.length - 1);
  };

  const calculateLearningStyle = (data) => {
    // Implementation of the scoring algorithm from the design document
    const weights = {
      vark: 0.30,
      scenarios: 0.25,
      preferences: 0.20,
      exercises: 0.15,
      background: 0.10
    };

    // Normalize scores to 0-100 scale
    const normalizedScores = {
      vark: normalizeVARKScores(data.vark),
      scenarios: normalizeScenarioScores(data.scenarios),
      preferences: normalizePreferenceScores(data.preferences),
      exercises: normalizeExerciseScores(data.exercises),
      background: normalizeBackgroundScores(data.background)
    };

    // Calculate weighted final scores
    const finalScores = {
      Visual: (
        normalizedScores.vark.Visual * weights.vark +
        normalizedScores.scenarios.Visual * weights.scenarios +
        normalizedScores.preferences.Visual * weights.preferences +
        normalizedScores.exercises.Visual * weights.exercises +
        normalizedScores.background.Visual * weights.background
      ),
      Auditory: (
        normalizedScores.vark.Auditory * weights.vark +
        normalizedScores.scenarios.Auditory * weights.scenarios +
        normalizedScores.preferences.Auditory * weights.preferences +
        normalizedScores.exercises.Auditory * weights.exercises +
        normalizedScores.background.Auditory * weights.background
      ),
      Reading: (
        normalizedScores.vark.Reading * weights.vark +
        normalizedScores.scenarios.Reading * weights.scenarios +
        normalizedScores.preferences.Reading * weights.preferences +
        normalizedScores.exercises.Reading * weights.exercises +
        normalizedScores.background.Reading * weights.background
      ),
      Kinesthetic: (
        normalizedScores.vark.Kinesthetic * weights.vark +
        normalizedScores.scenarios.Kinesthetic * weights.scenarios +
        normalizedScores.preferences.Kinesthetic * weights.preferences +
        normalizedScores.exercises.Kinesthetic * weights.exercises +
        normalizedScores.background.Kinesthetic * weights.background
      )
    };

    // Determine primary and secondary styles
    const sortedStyles = Object.entries(finalScores).sort(([,a], [,b]) => b - a);
    const primary = sortedStyles[0];
    const secondary = sortedStyles[1];

    // Calculate confidence
    const confidence = ((primary[1] - secondary[1]) / primary[1]) * 100;

    return {
      primaryStyle: primary[0],
      primaryScore: primary[1],
      secondaryStyle: secondary[0],
      secondaryScore: secondary[1],
      allScores: finalScores,
      confidence: confidence,
      learningProfile: getLearningProfile(primary[0], confidence)
    };
  };

  const normalizeVARKScores = (varkData) => {
    // Normalize VARK scores to 0-100
    const totalSelections = Object.values(varkData).reduce((sum, selections) =>
      sum + selections.length, 0);

    return {
      Visual: (varkData.Visual?.length || 0) / totalSelections * 100,
      Auditory: (varkData.Auditory?.length || 0) / totalSelections * 100,
      Reading: (varkData.Reading?.length || 0) / totalSelections * 100,
      Kinesthetic: (varkData.Kinesthetic?.length || 0) / totalSelections * 100
    };
  };

  const normalizeScenarioScores = (scenarioData) => {
    // Each scenario gives 4 points to one style
    const maxScore = 20 * 4; // 20 questions × 4 points
    const scores = { Visual: 0, Auditory: 0, Reading: 0, Kinesthetic: 0 };

    Object.values(scenarioData).forEach(answer => {
      if (answer === 1) scores.Visual += 4;
      else if (answer === 2) scores.Auditory += 4;
      else if (answer === 3) scores.Reading += 4;
      else if (answer === 4) scores.Kinesthetic += 4;
    });

    return {
      Visual: (scores.Visual / maxScore) * 100,
      Auditory: (scores.Auditory / maxScore) * 100,
      Reading: (scores.Reading / maxScore) * 100,
      Kinesthetic: (scores.Kinesthetic / maxScore) * 100
    };
  };

  const normalizePreferenceScores = (preferenceData) => {
    // 15 questions, 4 per style (but Kinesthetic has 3)
    const visualScore = (preferenceData.q1 + preferenceData.q2 + preferenceData.q3 + preferenceData.q4) / 20 * 100;
    const auditoryScore = (preferenceData.q5 + preferenceData.q6 + preferenceData.q7 + preferenceData.q8) / 20 * 100;
    const readingScore = (preferenceData.q9 + preferenceData.q10 + preferenceData.q11 + preferenceData.q12) / 20 * 100;
    const kinestheticScore = (preferenceData.q13 + preferenceData.q14 + preferenceData.q15) / 15 * 100;

    return {
      Visual: visualScore,
      Auditory: auditoryScore,
      Reading: readingScore,
      Kinesthetic: kinestheticScore
    };
  };

  const normalizeExerciseScores = (exerciseData) => {
    // Simplified scoring based on exercise interactions
    return {
      Visual: exerciseData.visualScore || 50,
      Auditory: exerciseData.auditoryScore || 50,
      Reading: exerciseData.readingScore || 50,
      Kinesthetic: exerciseData.kinestheticScore || 50
    };
  };

  const normalizeBackgroundScores = (backgroundData) => {
    // Simplified background scoring
    const scores = { Visual: 0, Auditory: 0, Reading: 0, Kinesthetic: 0 };

    // Question 3: Most successful learning experience
    if (backgroundData.q3 === 'Watching demonstrations') scores.Visual += 2;
    else if (backgroundData.q3 === 'Listening to explanations') scores.Auditory += 2;
    else if (backgroundData.q3 === 'Reading detailed materials') scores.Reading += 2;
    else if (backgroundData.q3 === 'Hands-on practice') scores.Kinesthetic += 2;

    // Question 6: Problem-solving approach
    if (backgroundData.q6 === 'Draw it out or visualize') scores.Visual += 2;
    else if (backgroundData.q6 === 'Talk it through with someone') scores.Auditory += 2;
    else if (backgroundData.q6 === 'Research and read about it') scores.Reading += 2;
    else if (backgroundData.q6 === 'Try different approaches') scores.Kinesthetic += 2;

    // Normalize to 0-100
    const maxScore = 4; // 2 questions × 2 points each
    return {
      Visual: (scores.Visual / maxScore) * 100,
      Auditory: (scores.Auditory / maxScore) * 100,
      Reading: (scores.Reading / maxScore) * 100,
      Kinesthetic: (scores.Kinesthetic / maxScore) * 100
    };
  };

  const getLearningProfile = (primaryStyle, confidence) => {
    if (confidence >= 20) return 'Strong Preference';
    if (confidence >= 10) return 'Moderate Preference';
    return 'Multimodal Learner';
  };

  const handleStartLearning = (learningStyle) => {
    // Map assessment results to learning paths
    const pathMapping = {
      'Visual': 'visual',
      'Auditory': 'interactive', // Closest match
      'Reading': 'theoretical',
      'Kinesthetic': 'hands-on'
    };

    const selectedPath = pathMapping[learningStyle] || 'hands-on';
    navigate(`/?path=${selectedPath}`);
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <>
      <Helmet>
        <title>Learning Style Assessment - 4C Learning System</title>
        <meta name="description" content="Take our comprehensive learning style assessment to discover your optimal programming learning approach." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <AssessmentProgress
            currentStep={currentStep}
            totalSteps={steps.length}
            steps={steps}
          />

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <CurrentComponent
              onNext={handleNext}
              onBack={handleBack}
              onComplete={handleComplete}
              data={assessmentData[steps[currentStep].id]}
              results={results}
              onStartLearning={handleStartLearning}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage;
