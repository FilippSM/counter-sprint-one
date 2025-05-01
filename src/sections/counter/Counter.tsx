import { useEffect, useState } from "react";
import { Button } from "../../component/Button";
import { Tablo } from "../../component/Tablo";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectMessage } from "../../model/message-selectors";
import { selectValues } from "../../model/setValues-selectors";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { changeCountAC } from "../../model/count-reducer";
import { selectCount } from "../../model/count-selectors";

export const Counter = () => {
  const dispath = useAppDispatch();

  const message = useAppSelector(selectMessage);
  const values = useAppSelector(selectValues);

  /*     const [count, setCount] = useState(values.minValue); */

  const setCount = (value: number) => {
    dispath(changeCountAC({ count: value }));
  };

  /*     const count = useAppSelector(selectCount); */
  const count = useAppSelector(selectCount) || values.minValue;

  useEffect(() => {
    setCount(values.minValue);
  }, [values.minValue]); // Устанавливаем count при изменении minValue

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(values.minValue);
  };

  return (
    <div className={styles.box}>
      <Tablo
        currentCount={count}
        maxCount={values.maxValue}
        message={message}
      />
      <div className={styles.button_container}>
        <Button
          callBack={increment}
          name={"inc"}
          disabled={count >= values.maxValue || message === "Incorrect value"}
        />
        <Button
          callBack={reset}
          name={"res"}
          disabled={count === values.minValue}
        />
      </div>
    </div>
  );
};
