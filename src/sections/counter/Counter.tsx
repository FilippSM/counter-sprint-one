import { useState } from "react";
import styles from './styles.module.css'; 
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectMessage } from "../../model/message-selectors";

type CounterType = {
    minValue: number
    maxValue: number
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const Counter = (props: CounterType) => {
    const message = useAppSelector(selectMessage);

    const increment = () => {
        props.setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        props.setCount(props.minValue);
    };


    return (
        <div className={styles.box}>
            <Tablo currentCount={props.count} maxCount={props.maxValue} message={message}/>
            <div className={styles.button_container}>
                <Button callBack={increment} name={"inc"} disabled={props.count >= props.maxValue || message === "Incorrect value"} />
                <Button callBack={reset} name={"res"} disabled={props.count === props.minValue} />
            </div>
        </div>
    )
}