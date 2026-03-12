import type { Value } from '../types';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import styles from './ValueCard.module.css';

interface ValueCardProps {
    value: Value;
}

export default function ValueCard({ value }: ValueCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: value.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className={styles.card}>
      <p className={styles.title}>{value.title}</p>
      <p className={styles.description}>{value.description}</p>
    </div>
  );
}