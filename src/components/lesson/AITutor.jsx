import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Brain, MessageCircle } from 'lucide-react';

const AITutor = ({ lesson }) => {
  return (
    <div className="mb-8">
      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <Brain className="w-6 h-6 text-purple-400" />
          AI Tutor Assistant
        </h2>
        
        <div className="space-y-4">
          <div className="ai-tutor-bubble ml-auto">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Hi! I'm your AI tutor. I can help explain concepts, answer questions about {lesson.title}, 
                  and provide additional practice problems. What would you like to know?
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything about this lesson..."
              className="flex-1 px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => toast({ title: "🚧 AI tutor isn't implemented yet—but , please wait for next update. " })}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;