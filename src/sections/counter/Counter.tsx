import { useState } from "react";
import styles from './styles.module.css'; 
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";

type CounterType = {
    minValue: number
    maxValue: number
}


export const Counter = (props: CounterType) => {
    const maxValue = props.maxValue;
    const minValue = props.minValue;
  /*   const maxValue = 5;
    const minValue = 0; */

    const [count, setCount] = useState<number>(minValue);

/*     setCount(minValue) */

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        setCount(minValue);
    };



    return (
        <div className={styles.box}>
            <Tablo currentCount={count} maxCount={maxValue} />
            <div className={styles.button_container}>
                <Button callBack={increment} name={"inc"} disabled={count >= maxValue} />
                <Button callBack={reset} name={"res"} disabled={count === minValue} />
            </div>
        </div>
    )
}