import React from 'react';
import { Eye } from 'lucide-react';

const VisualContent = ({ lesson }) => {
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-semibold">Visual Learning Experience</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-blue-300">Concept Overview</h4>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
              <img  alt="C++ concept diagram" class="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1555121638-bb997817a76d" />
              <p className="text-gray-300">{lesson.description}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-purple-300">Visual Code Flow</h4>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
              <img  alt="Code flow diagram" class="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1687603827201-922149337146" />
              <p className="text-gray-300">Follow the visual flow of code execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualContent;