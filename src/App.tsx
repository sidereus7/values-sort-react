import { useState } from 'react';
import type { Value, Importance } from './types';
import valuesData from './data/valuecards.json';
import ValueColumn from './components/ValueColumn';

const initialValues: Value[] = valuesData.map((value, index) => ({
  ...value,
  id: index,
  importance: 'unsorted' as Importance,
}));

export default function App() {
  const [values, setValues] = useState<Value[]>(initialValues);

  return (
    <div>
      <ValueColumn header={'Very Important'} values={values.filter((value) => value.importance === 'very-important')} />
      <ValueColumn header={'Important'} values={values.filter((value) => value.importance === 'important')} />
      <ValueColumn header={'Not Important'} values={values.filter((value) => value.importance === 'not-important')} />
    </div>
  );
}