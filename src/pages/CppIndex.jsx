
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { lessons, learningPaths } from '@/data/lessons';
import { BookOpen, Clock, Star, Search, Filter, ChevronRight, Code, Brain, Target, Users, UserCheck } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CppIndex = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const pathParam = urlParams.get('path');
    if (pathParam && learningPaths.find(p => p.id === pathParam)) {
      setSelectedPath(pathParam);
      toast({
        title: "Learning Path Selected",
        description: `Based on your assessment, we've selected the ${learningPaths.find(p => p.id === pathParam)?.name} for you.`,
        duration: 5000,
      });
    }
  }, [location.search]);

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || lesson.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const handleLessonSelect = (lessonId) => {
    if (!selectedPath) {
      toast({
        title: "Select Learning Path",
        description: "Please choose your preferred learning style first!",
        duration: 3000,
      });
      return;
    }
    navigate(`/lesson/${lessonId}/${selectedPath}`);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>C++ Programming Tutorial Hub - Learn C++ Step by Step</title>
        <meta name="description" content="Master C++ programming with our comprehensive tutorial series. Choose your learning style and progress through 30 structured lessons with interactive content." />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Master C++ Programming
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive tutorials designed for every learning style. From basics to advanced concepts, 
              build real-world programming skills with interactive lessons and AI-powered guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 glass-effect rounded-full px-6 py-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>30 Structured Lessons</span>
              </div>
              <div className="flex items-center gap-2 glass-effect rounded-full px-6 py-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span>AI Tutor Support</span>
              </div>
              <div className="flex items-center gap-2 glass-effect rounded-full px-6 py-3">
                <Target className="w-5 h-5 text-green-400" />
                <span>4 Learning Paths</span>
              </div>
              <div className="flex items-center gap-2 glass-effect rounded-full px-6 py-3">
                <Code className="w-5 h-5 text-orange-400" />
                <span>Hands-On Practice</span>
              </div>
              <div className="flex items-center gap-2 glass-effect rounded-full px-6 py-3">
                <UserCheck className="w-5 h-5 text-pink-400" />
                <span>Personalized Assessment</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/assessment')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Take Learning Assessment
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Learning Paths Selection */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Learning Path</h2>
              <p className="text-gray-300 text-lg">Select the learning style that works best for you</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`learning-path-card ${selectedPath === path.id ? 'border-purple-400 bg-purple-400/20' : ''}`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${path.color} bg-clip-text text-transparent`}>
                    {path.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{path.name}</h3>
                  <p className="text-gray-400 text-sm">{path.description}</p>
                  {selectedPath === path.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-4 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search lessons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="pl-10 pr-8 py-3 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Available Lessons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="lesson-card group cursor-pointer"
                    onClick={() => handleLessonSelect(lesson.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                        {lesson.difficulty}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                      Lesson {lesson.id}: {lesson.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {lesson.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{lesson.topics.length} topics</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {lesson.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                      {lesson.topics.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          +{lesson.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-effect border-t border-white/10 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Richchfield 3rd Year project Colile, Uzair, Matimba, Olwethu, Fredrick
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CppIndex;
