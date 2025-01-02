import { useState } from 'react';
import { Counter } from './sections/counter/Counter';
import { SetCounter } from './sections/setCounter/SetCounter';

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0); // Установите начальное значение

  const getNumbers = (maxValue: number, minValue: number) => {
    setMaxValue(maxValue)
    setMinValue(minValue)
  }


  return (
    <div style={{ display: 'flex' }}>
      <SetCounter getNumbers={getNumbers} />
      <Counter maxValue={maxValue} minValue={minValue}  />
    </div>
  );
}

export default App;
