import { useState } from "react";
import styles from './styles.module.css'; 
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";

type CounterType = {
    minValue: number
    maxValue: number
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}


export const Counter = (props: CounterType) => {
    /* const maxValue = props.maxValue;
    const minValue = props.minValue; */
  /*   const maxValue = 5;
    const minValue = 0; */

    /* const [count, setCount] = useState<number>(minValue); */

/*     setCount(minValue) */

    const increment = () => {
        props.setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        props.setCount(props.minValue);
    };


    return (
        <div className={styles.box}>
            <Tablo currentCount={props.count} maxCount={props.maxValue} />
            <div className={styles.button_container}>
                <Button callBack={increment} name={"inc"} disabled={props.count >= props.maxValue} />
                <Button callBack={reset} name={"res"} disabled={props.count === props.minValue} />
            </div>
        </div>
    )
}