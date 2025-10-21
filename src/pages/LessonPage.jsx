import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { lessons, learningPaths } from '@/data/lessons';
import LessonHeader from '@/components/lesson/LessonHeader';
import VideoPlayer from '@/components/lesson/VideoPlayer';
import LearningContent from '@/components/lesson/LearningContent';
import Quiz from '@/components/lesson/Quiz';
import AITutor from '@/components/lesson/AITutor';
import LessonNavigation from '@/components/lesson/LessonNavigation';
import PageHeader from '@/components/lesson/PageHeader';

const LessonPage = () => {
  const { lessonId, learningType } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [learningPath, setLearningPath] = useState(null);

  useEffect(() => {
    const currentLesson = lessons.find(l => l.id === parseInt(lessonId));
    const currentLearningPath = learningPaths.find(p => p.id === learningType);

    if (!currentLesson || !currentLearningPath) {
      navigate('/');
    } else {
      setLesson(currentLesson);
      setLearningPath(currentLearningPath);
    }
  }, [lessonId, learningType, navigate]);

  if (!lesson || !learningPath) {
    return null;
  }

  const motionProps = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <>
      <Helmet>
        <title>{`${lesson.title} - ${learningPath.name} | C++ Tutorial Hub`}</title>
        <meta name="description" content={`Learn ${lesson.title} through the ${learningPath.name} approach. ${lesson.description}`} />
      </Helmet>
      
      <div className="min-h-screen">
        <PageHeader lesson={lesson} learningPath={learningPath} />

        <main className="max-w-6xl mx-auto px-4 py-8">
          <motion.div {...motionProps(0)}>
            <LessonHeader lesson={lesson} />
          </motion.div>

          <motion.div {...motionProps(0.1)}>
            <VideoPlayer lesson={lesson} />
          </motion.div>

          <motion.div {...motionProps(0.2)}>
            <LearningContent lesson={lesson} learningType={learningType} />
          </motion.div>

          <motion.div {...motionProps(0.3)}>
            <Quiz lesson={lesson} />
          </motion.div>

          <motion.div {...motionProps(0.4)}>
            <AITutor lesson={lesson} />
          </motion.div>

          <motion.div {...motionProps(0.5)}>
            <LessonNavigation lesson={lesson} learningType={learningType} />
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default LessonPage;