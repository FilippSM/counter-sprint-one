import { useEffect, useState } from 'react';
import { Counter } from '../sections/counter/Counter';
import { SetCounter } from '../sections/setCounter/SetCounter';
import { selectMessage } from '../model/message-selectors';
import { useAppDispatch } from '../hook/useAppDispatch';
import { useAppSelector } from '../hook/useAppSelector';
import { changeMessageAC } from '../model/message-reducer';

function App() {
  const dispath = useAppDispatch();


  const maxStartValue = 5;
  const minStartValue = 0;

  const [maxValue, setMaxValue] = useState(maxStartValue);
  const [minValue, setMinValue] = useState(minStartValue);
  const [count, setCount] = useState(minValue);

  const message = useAppSelector(selectMessage);
  /* const [message, setMessage] = useState<string | number>(minValue); */

  const getNumbers = (maxValue: number, minValue: number) => {
    setMaxValue(maxValue)
    setMinValue(minValue)
    setCount(minValue);
  }

  // Начальное значение равно countMin


  const setMessage = () => {
    dispath(changeMessageAC({ message }))
  }

  return (
    <div style={{ display: 'flex' }}>
      <SetCounter
        getNumbers={getNumbers}
        setMessage={setMessage}
        message={message}
      />
      <Counter
        maxValue={maxValue}
        minValue={minValue}
        count={count}
        setCount={setCount}
        message={message}
      />
    </div>
  );
}

export default App;