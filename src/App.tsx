import { useState } from 'react';

import CardDeck from './components/CardDeck';
import ValueColumn from './components/ValueColumn';

import type { Value, Importance } from './types';

import styles from './App.module.css';

import valuesData from './data/valuecards.json';

const initialValues: Value[] = valuesData.map((value, index) => ({
  ...value,
  id: index,
  importance: 'unsorted' as Importance,
}));

export default function App() {
  const [values, setValues] = useState<Value[]>(initialValues);

  return (
    <div className={styles.app}>
      <p className={styles.title}>Values Sort</p>

      <CardDeck values={values.filter((value) => value.importance === 'unsorted')}/>

      <div className={styles.columns}>
        <ValueColumn
          header='Very Important'
          importance='very-important'
          values={values.filter((value) => value.importance === 'very-important')}
        />
        <ValueColumn
          header='Important'
          importance='important'
          values={values.filter((value) => value.importance === 'important')}
        />
        <ValueColumn
          header='Not Important'
          importance='not-important'
          values={values.filter((value) => value.importance === 'not-important')}
        />
      </div>
    </div>
  );
}