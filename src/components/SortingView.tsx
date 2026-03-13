import CardDeck from '../components/CardDeck';
import ValueColumn from '../components/ValueColumn';

import type { Value } from '../types';

import styles from '../App.module.css'; // TODO: Change to SortingView.module.css?

interface SortingViewProps {
    values: Value[];
    onProceed: () => void;
}

export default function SortingView({ values, onProceed }: SortingViewProps) {
  return (
    <div className={styles.app}>
      <p className={styles.title}>Values Sort</p>

      <CardDeck values={values.filter((value) => value.importance === 'unsorted')}/>
      { values.every((value) => value.importance !== 'unsorted') &&
        (<button onClick={onProceed}>Proceed</button>
      )}

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