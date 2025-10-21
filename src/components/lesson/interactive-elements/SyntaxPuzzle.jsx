import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Check, X, Shuffle } from 'lucide-react';

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const SyntaxPuzzle = ({ puzzle }) => {
  const [lines, setLines] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (puzzle) {
      resetPuzzle();
    }
  }, [puzzle]);

  const resetPuzzle = () => {
    setLines(shuffleArray(puzzle.lines));
    setIsCorrect(null);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(lines);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setLines(items);
    setIsCorrect(null);
  };

  const checkOrder = () => {
    const currentOrder = lines.map(line => line.id);
    const correct = JSON.stringify(currentOrder) === JSON.stringify(puzzle.correctOrder);
    setIsCorrect(correct);
    if (correct) {
      toast({ title: "Correct Order!", description: "You've solved the puzzle!", className: "bg-green-600 border-green-600 text-white" });
    } else {
      toast({ title: "Incorrect Order", description: "Keep trying!", variant: "destructive" });
    }
  };

  if (!puzzle) {
    return <p className="text-gray-400">No syntax puzzle available for this lesson.</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-300">Arrange the code lines into the correct order to form a valid program.</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="puzzle">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 space-y-2">
              {lines.map((line, index) => (
                <Draggable key={line.id} draggableId={line.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-slate-700 rounded code-font text-white cursor-grab"
                    >
                      {line.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex gap-2">
        <Button onClick={checkOrder} className="w-full bg-blue-600 hover:bg-blue-700">
          {isCorrect === true && <Check className="w-4 h-4 mr-2" />}
          {isCorrect === false && <X className="w-4 h-4 mr-2" />}
          Check Order
        </Button>
        <Button onClick={resetPuzzle} variant="secondary" className="w-full">
          <Shuffle className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SyntaxPuzzle;