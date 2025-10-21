import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = ({ lesson }) => {
  return (
    <div className="mb-8">
      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <Play className="w-6 h-6 text-red-400" />
          Video Tutorial
        </h2>
        <div className="aspect-video bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
          <div className="text-center">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">Video placeholder for: {lesson.title}</p>
            <p className="text-sm text-gray-500 mt-2">URL: {lesson.videoUrl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;