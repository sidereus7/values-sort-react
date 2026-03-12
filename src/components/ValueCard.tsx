import type { Value } from '../types';

import styles from './ValueCard.module.css';

interface ValueCardProps {
    value: Value;
}

export default function ValueCard({ value }: ValueCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{value.title}</p>
      <p className={styles.description}>{value.description}</p>
    </div>
  );
}