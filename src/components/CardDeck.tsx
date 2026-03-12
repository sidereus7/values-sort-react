import type { Value } from '../types';
import ValueCard from '../components/ValueCard';
import styles from './CardDeck.module.css'

interface CardDeckProps {
    values: Value[];
}

export default function CardDeck({ values }: CardDeckProps) {
  if (values.length === 0) {
    return <p>All cards sorted!</p>;
  }

  return (
    <div className={styles.deck}>
      <ValueCard value={values[0]} />
    </div>
  );
}