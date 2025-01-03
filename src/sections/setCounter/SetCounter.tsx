import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Button } from "../../component/Button";

type SetCounterType = {
    getNumbers: (maxValue: number, minValue: number) => void;
    message: string | number;
    setMessage: React.Dispatch<React.SetStateAction<string | number>>;
};

export const SetCounter = (props: SetCounterType) => {
    const maxValue = 5; // Начальное значение
    const minValue = 0;  // Начальное значение

   /*  const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue); */

    const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue);

   /*  useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(countMax))
    }, [countMax])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(countMin))
    }, [countMin]) */

    // Обновляем сообщение при изменении значений
    const handleMaxChange = (value: number) => {
        setCountMax(value);
        props.setMessage(value < 0 || value <= countMin ? "Incorrect value" : "Enter values and press set");
    };

    const handleMinChange = (value: number) => {
        setCountMin(value);
        props.setMessage(value < 0 || value >= countMax ? "Incorrect value" : "Enter values and press set");
    };

    const setNumbers = () => {
        props.getNumbers(countMax, countMin);
        props.setMessage(countMin); // Устанавливаем сообщение на текущее значение countMin при нажатии
    };

    return (
        <div className={styles.box}>
            <label>
                <span>max value: </span>
                <input 
                    type="number" 
                    value={countMax} 
                    onChange={e => handleMaxChange(Number(e.currentTarget.value))}
                />
            </label>
            <label>
                <span>start value: </span>
                <input 
                    type="number" 
                    value={countMin} 
                    onChange={e => handleMinChange(Number(e.currentTarget.value))}
                />
            </label>
            <div className={styles.button_container}>
                <Button callBack={setNumbers} name={"set"} />
            </div>
            <div>max value: {countMax}</div>
            <div>start value: {countMin}</div>
            <div>{props.message}</div> {/* Отображаем текущее сообщение */}
        </div>
    );
}