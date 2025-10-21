
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import CppIndex from '@/pages/CppIndex';
import LessonPage from '@/pages/LessonPage';

function App() {
  return (
    <Router>
      <Helmet>
        <title>C++ Tutorial Hub - Master Programming Step by Step</title>
        <meta name="description" content="Comprehensive C++ programming tutorials with multiple learning styles, interactive examples, and AI tutoring. Perfect for beginners to advanced developers." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Routes>
          <Route path="/" element={<CppIndex />} />
          <Route path="/lesson/:lessonId/:learningType" element={<LessonPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
