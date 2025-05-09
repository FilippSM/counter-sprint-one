import { useEffect } from "react";
import { Button } from "../../component/Button";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import styles from "./styles.module.css";
import { changeCountMaxAC, changeCountMinAC, changeMaxValueAC, changeMessageAC, changeMinValueAC, getCountLocalStorageTC, selectSetCounter, setCountLocalStorageTC, TypeMessage } from "../../model/count-slice";

export const SetCounter = () => {
  const dispatch = useAppDispatch();

  const setCount = useAppSelector(selectSetCounter);
  let countMax = setCount.countMax
  let countMin = setCount.countMin;

  // Загрузка значений из localStorage при монтировании компонента
  /*   useEffect(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        const storedMinValue = localStorage.getItem('minValue');

        if (storedMaxValue) {
            dispatch(changeCountMaxAC({ countMax: JSON.parse(storedMaxValue) }));
        }
        if (storedMinValue) {
            dispatch(changeCountMinAC({ countMin: JSON.parse(storedMinValue) }));
        }
    }, [dispatch]); */

  //через thunk
  useEffect(() => {
    dispatch(getCountLocalStorageTC());
  }, []);

  const setCountMax = (value: number) => {
    dispatch(changeCountMaxAC({ countMax: value }));
  };
  const setCountMin = (value: number) => {
    dispatch(changeCountMinAC({ countMin: value }));
  };

  const setMessage = (message: TypeMessage) => {
    dispatch(changeMessageAC({ message }));
  };

  const setMaxValue = (value: number) => {
    dispatch(changeMaxValueAC({ maxValue: value }));
  };
  const setMinValue = (value: number) => {
    dispatch(changeMinValueAC({ minValue: value }));
  };

  //логика для local storage
  /* const [countMax, setCountMax] = useState<number>(() => {
        const valueAsString = localStorage.getItem('maxValue');
        return valueAsString ? JSON.parse(valueAsString) : maxValueStart;
    });

    const [countMin, setCountMin] = useState<number>(() => {
        const valueAsString = localStorage.getItem('minValue');
        return valueAsString ? JSON.parse(valueAsString) : minValueStart;
    });

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(countMax))
    }, [countMax])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(countMin))
    }, [countMin]) */

  // Обновляем сообщение при изменении значений
  const handleMaxChange = (value: number) => {
    setCountMax(value);
    setMessage(
      value < 0 || value <= countMin
        ? "Incorrect value"
        : "Enter values and press set"
    );
  };

  const handleMinChange = (value: number) => {
    setCountMin(value);
    setMessage(
      value < 0 || value >= countMax
        ? "Incorrect value"
        : "Enter values and press set"
    );
  };

  const setNumbers = () => {
    setMaxValue(countMax);
    setMinValue(countMin);
    setMessage(countMin); // Устанавливаем сообщение на текущее значение countMin при нажатии

    /*      localStorage.setItem('maxValue', JSON.stringify(countMax));
        localStorage.setItem('minValue', JSON.stringify(countMin)); */

    dispatch(setCountLocalStorageTC({ countMax, countMin }));
  };

  return (
    <div className={styles.box}>
      <label>
        <span>max value: </span>
        <input
          type="number"
          value={countMax}
          onChange={(e) => handleMaxChange(Number(e.currentTarget.value))}
        />
      </label>
      <label>
        <span>start value: </span>
        <input
          type="number"
          value={countMin}
          onChange={(e) => handleMinChange(Number(e.currentTarget.value))}
        />
      </label>
      <div className={styles.button_container}>
        <Button
          callBack={setNumbers}
          name={"set"}
          disabled={
            countMax < 0 ||
            countMax <= countMin ||
            countMin < 0 ||
            countMax === countMin
          }
        />
      </div>
    </div>
  );
};
