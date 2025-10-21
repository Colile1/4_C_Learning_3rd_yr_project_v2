import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import InteractiveDemo from '@/components/lesson/interactive-elements/InteractiveDemo';

const InteractiveContent = ({ lesson }) => {
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-orange-400" />
          <h3 className="text-2xl font-semibold">Interactive Learning Experience</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-orange-300">Interactive Demo</h4>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-400/30">
              <img  alt="Interactive C++ demo" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1555121638-bb997817a76d" />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Start Interactive Demo
                  </Button>
                </DialogTrigger>
                <InteractiveDemo lesson={lesson} />
              </Dialog>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-pink-300">Learning Games</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-pink-400/50 hover:bg-pink-400/20"
                onClick={() => toast({ title: "🚧 Learning games aren't implemented yet—but , please wait for next update. " })}
              >
                🎯 Code Matching Game
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-pink-400/50 hover:bg-pink-400/20"
                onClick={() => toast({ title: "🚧 Learning games aren't implemented yet—but , please wait for next update. " })}
              >
                🧩 Syntax Puzzle
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-pink-400/50 hover:bg-pink-400/20"
                onClick={() => toast({ title: "🚧 Learning games aren't implemented yet—but , please wait for next update. " })}
              >
                🏆 Code Challenge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContent;