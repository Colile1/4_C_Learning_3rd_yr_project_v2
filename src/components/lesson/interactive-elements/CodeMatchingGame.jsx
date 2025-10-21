import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Shuffle } from 'lucide-react';

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const CodeMatchingGame = ({ pairs }) => {
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState(null);
  const [matched, setMatched] = useState([]);
  const [incorrect, setIncorrect] = useState(null);

  useEffect(() => {
    if (pairs) {
      resetGame();
    }
  }, [pairs]);

  const resetGame = () => {
    setShuffledPairs(shuffleArray([...pairs]));
    setSelectedCode(null);
    setSelectedDesc(null);
    setMatched([]);
    setIncorrect(null);
  };

  const handleSelect = (type, item) => {
    if (type === 'code') {
      setSelectedCode(item);
      checkMatch(item, selectedDesc);
    } else {
      setSelectedDesc(item);
      checkMatch(selectedCode, item);
    }
  };

  const checkMatch = (codeItem, descItem) => {
    if (codeItem && descItem) {
      if (codeItem.description === descItem.description) {
        setMatched([...matched, codeItem.code]);
        toast({ title: "Correct Match!", className: "bg-green-600 border-green-600 text-white" });
      } else {
        setIncorrect({ code: codeItem.code, desc: descItem.description });
        toast({ title: "Incorrect Match", description: "Try again!", variant: "destructive" });
        setTimeout(() => setIncorrect(null), 1000);
      }
      setSelectedCode(null);
      setSelectedDesc(null);
    }
  };

  if (!pairs || pairs.length === 0) {
    return <p className="text-gray-400">No code matching game available for this lesson.</p>;
  }

  const codeItems = pairs.map(p => p);
  const descItems = shuffledPairs.map(p => p);

  return (
    <div className="space-y-4">
      <p className="text-gray-300">Match the code snippets with their correct descriptions.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {codeItems.map((item) => (
            <Button
              key={item.code}
              variant="outline"
              onClick={() => handleSelect('code', item)}
              disabled={matched.includes(item.code)}
              className={`w-full h-16 justify-start code-font ${selectedCode === item ? 'bg-blue-500/30 border-blue-500' : ''} ${matched.includes(item.code) ? 'bg-green-500/30 border-green-500 opacity-50' : ''} ${incorrect?.code === item.code ? 'bg-red-500/30 border-red-500' : ''}`}
            >
              {item.code}
            </Button>
          ))}
        </div>
        <div className="space-y-2">
          {descItems.map((item) => (
            <Button
              key={item.description}
              variant="outline"
              onClick={() => handleSelect('desc', item)}
              disabled={matched.includes(item.code)}
              className={`w-full h-16 justify-start text-left ${selectedDesc === item ? 'bg-blue-500/30 border-blue-500' : ''} ${matched.includes(item.code) ? 'bg-green-500/30 border-green-500 opacity-50' : ''} ${incorrect?.desc === item.description ? 'bg-red-500/30 border-red-500' : ''}`}
            >
              {item.description}
            </Button>
          ))}
        </div>
      </div>
      {matched.length === pairs.length && (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-4 bg-green-500/20 rounded-lg">
          <h3 className="text-xl font-bold text-green-300">Congratulations! You've matched them all!</h3>
        </motion.div>
      )}
      <Button onClick={resetGame} variant="secondary" className="w-full">
        <Shuffle className="w-4 h-4 mr-2" />
        Reset Game
      </Button>
    </div>
  );
};

export default CodeMatchingGame;