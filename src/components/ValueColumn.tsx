import type { ColumnImportance, Value } from '../types';
import ValueCard from '../components/ValueCard';
import styles from './ValueColumn.module.css';

interface ValueColumnProps {
    header: string;
    importance: ColumnImportance;
    values: Value[];
}

const colorMap = {
    'very-important': styles.veryImportant,
    'important': styles.important,
    'not-important': styles.notImportant,
};

export default function ValueColumn({ header, importance, values }: ValueColumnProps) {
    return (
        <div className={`${styles.column} ${colorMap[importance]}`}>
            <p className={styles.header}>{header}</p>
            <div>
                {values.map((value) => (
                    <ValueCard key={value.id} value={value} />
                ))}
            </div>
        </div>
    );
}