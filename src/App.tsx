import React, { useState } from 'react';
import './App.css';
import { Button } from './component/Button';
import { Tablo } from './component/Tablo';
import styles from './styles.module.css'; 

function App() {

  const maxValue = 5;
  const minValue = 0;

  const [count, setCount] = useState<number>(minValue);


  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    setCount(minValue);
  };

  

  return (
    <div className={styles.box}>
      <Tablo currentCount={count} maxCount={maxValue}/>
      <div className={styles.button_container}>
        <Button callBack={increment} name={"inc"} disabled={count >= maxValue}/>
        <Button callBack={reset} name={"res"} disabled={count === minValue}/>
      </div>
    </div>
  );
}

export default App;
