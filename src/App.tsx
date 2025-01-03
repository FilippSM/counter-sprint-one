import { useEffect, useState } from 'react';
import { Counter } from './sections/counter/Counter';
import { SetCounter } from './sections/setCounter/SetCounter';

function App() {
  const maxStartValue = 5;
  const minStartValue = 0;

  const [maxValue, setMaxValue] = useState(maxStartValue);
  const [minValue, setMinValue] = useState(minStartValue);
  const [count, setCount] = useState(minValue);

  const getNumbers = (maxValue: number, minValue: number) => {
    setMaxValue(maxValue)
    setMinValue(minValue)
    setCount(minValue);
  }


  const [message, setMessage] = useState<string>(minValue.toString()); // Начальное значение равно countMin

    // useEffect для отслеживания изменений countMax и countMin
 /*    useEffect(() => {
   

        if (minValue < 0 || maxValue < 0 || minValue === maxValue ) {
            setMessage("Incorrect value");
        } else {
            setMessage("Enter values and press set"); 
        }
    }, [maxValue, minValue]);  */

  // useEffect для установки начального сообщения при первом рендере
/*   useEffect(() => {
    setMessage(minValue.toString());
  }, []);  */

  return (
    <div style={{ display: 'flex' }}>
      <SetCounter getNumbers={getNumbers} setMessage={setMessage} message={message}/>
      <Counter maxValue={maxValue} minValue={minValue}  count={count} setCount={setCount} message={message}/>
    </div>
  );
}

export default App;