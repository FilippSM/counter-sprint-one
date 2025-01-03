import { useState } from "react";
import styles from './styles.module.css';
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";

type SetCounterType = {
    getNumbers: (maxValue: number, minValue: number) => void
}

export const SetCounter = (props: SetCounterType) => {
    const maxValue = 5;
    const minValue = 0;

    const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue);

    const [error, setError] = useState<any>(0);

    const setNumbers = () => {
        props.getNumbers(countMax, countMin) 
        setError(countMin)
    };


    const renderMessage = () => {
        if (countMin < 0) {
          
            return <div>incorrect value</div>;
        }
        if (countMin === countMax) {
            return <div>incorrect value</div>;
        }
        return <div>Enter values and press set</div>;
    };

    return (
        <div className={styles.box}>
            <label>
                <span>max value: </span>
                <input type="number" value={countMax} onChange={e => {setCountMax(Number(e.currentTarget.value))}}/>
            </label>
            <label>
                <span>start value: </span>
                <input type="number" value={countMin} onChange={e => {setCountMin(Number(e.currentTarget.value))}}/>
            </label>
            <div className={styles.button_container}>
                <Button callBack={setNumbers} name={"set"} /* disabled={count >= maxValue} */ />
            </div>
           {/*  для проверки */}
            <div>max value: {countMax}</div>
            <div>start value: {countMin}</div>

            <div>{renderMessage()}</div>
            <div>{error}</div>
        {/*     {countMin < 0 ? 0 : <div>Enter values and press set</div>} */}
      
        </div>
    )
}