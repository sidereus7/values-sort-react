import type { Value } from '../types';

interface ValueCardProps {
    value: Value;
}

export default function ValueCard({ value }: ValueCardProps) {
  return (
    <div>
      <p className="card-title">{value.title}</p>
      <p>{value.description}</p>
    </div>
  );
}