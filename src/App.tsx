import { useEffect, useState } from 'react';

import { DndContext, type DragEndEvent } from '@dnd-kit/core';

import type { Importance, Phase, Value } from './types';

import SortingView from './components/SortingView';

import valuesData from './data/valuecards_small.json';

const initialValues: Value[] = valuesData.map((value, index) => ({
  ...value,
  id: index,
  importance: 'unsorted' as Importance,
}));

export default function App() {
  const [phase, setPhase] = useState<Phase>('sorting');

  // load cards from local storage if available
  const [values, setValues] = useState<Value[]>(() => {
    const saved = localStorage.getItem('values');
    return saved ? JSON.parse(saved) : initialValues;
  });

  // save to local storage on change
  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  // give dragged card the importance of the destination column
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) { return; }
    
    setValues(values.map((value) => 
      value.id === active.id 
        ? { ...value, importance: over.id as Importance }
        : value
    ));
  }

  function handleProceedToParing() {
    setPhase('paring');
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {phase === 'sorting' && <SortingView values={values} onProceed={handleProceedToParing} />}
    {/*  {phase === 'paring' && <ParingView ... />}
         {phase === 'ranking' && <RankingView ... />}
         {phase === 'complete' && <ResultsView ... />*/}
    </DndContext>
  );
}