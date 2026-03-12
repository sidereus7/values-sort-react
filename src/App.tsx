import valuesData from './data/valuecards.json';
import ValueCard from './components/ValueCard';

const values = valuesData.map((value, index) => ({
  ...value,
  id: index,
}));

export default function App() {
  return (
    <div>
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
}