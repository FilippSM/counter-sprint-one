import { useState, useEffect } from "react";
import styles from './styles.module.css';
import { Button } from "../../component/Button";

type SetCounterType = {
    getNumbers: (maxValue: number, minValue: number) => void
}

export const SetCounter = (props: SetCounterType) => {
    const maxValue = 5;
    const minValue = 0;

    const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue);
    const [message, setMessage] = useState<string>(countMin.toString()); // Начальное значение равно countMin

    // useEffect для отслеживания изменений countMax и countMin
    useEffect(() => {
        if (countMin < 0 || countMax < 0 || countMin === countMax ) {
            setMessage("Incorrect value");
        } else {
            setMessage("Enter values and press set"); // Устанавливаем сообщение, если значения корректные
        }
    }, [countMax, countMin]); // Зависимости

    const setNumbers = () => {
        if (countMin >= 0 && countMin !== countMax) {
            props.getNumbers(countMax, countMin);
            setMessage(countMin.toString()); // Устанавливаем сообщение на текущее значение countMin при нажатии
        }
    };

    // useEffect для установки начального сообщения при первом рендере
    useEffect(() => {
        setMessage(countMin.toString()); // Устанавливаем начальное сообщение равным countMin
    }, []); // Пустой массив зависимостей

    return (
        <div className={styles.box}>
            <label>
                <span>max value: </span>
                <input 
                    type="number" 
                    value={countMax} 
                    onChange={e => setCountMax(Number(e.currentTarget.value))}
                />
            </label>
            <label>
                <span>start value: </span>
                <input 
                    type="number" 
                    value={countMin} 
                    onChange={e => setCountMin(Number(e.currentTarget.value))}
                />
            </label>
            <div className={styles.button_container}>
                <Button callBack={setNumbers} name={"set"} />
            </div>
            <div>max value: {countMax}</div>
            <div>start value: {countMin}</div>

            <div>{message}</div> {/* Отображаем текущее сообщение */}
        </div>
    );
}