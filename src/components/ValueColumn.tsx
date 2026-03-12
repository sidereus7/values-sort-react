import type { Value } from '../types';
import ValueCard from '../components/ValueCard';

interface ValueColumnProps {
    header: string;
    values: Value[];
}

export default function ValueColumn({ header, values }: ValueColumnProps) {
    return (
        <div>
            <p className="column-header">{header}</p>
            <div>
                {values.map((value) => (
                    <ValueCard key={value.id} value={value} />
                ))}
            </div>
        </div>
    );
}