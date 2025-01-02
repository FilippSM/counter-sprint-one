import { useState } from "react";
import styles from './styles.module.css';
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";

export const SetCounter = () => {


    const maxValue = 0;
    const minValue = 0;

    const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue);


    const setNumbers = () => {

    
    };


    return (
        <div className={styles.box}>
            <label>
                <span>max value: </span>
                <input type="number" /* value={0} */ onChange={e => {setCountMax(Number(e.currentTarget.value))}}/>
            </label>
            <label>
                <span>start value: </span>
                <input type="number" /* value={0} */ onChange={e => {setCountMin(Number(e.currentTarget.value))}}/>
            </label>
            <div className={styles.button_container}>
                <Button callBack={setNumbers} name={"set"} /* disabled={count >= maxValue} */ />
            </div>
            <div>max value: {countMax}</div>
            <div>start value: {countMin}</div>
        </div>
    )
}