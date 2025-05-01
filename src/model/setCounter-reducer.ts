import { createAction, createReducer, Dispatch } from "@reduxjs/toolkit";

export type TypeSetCounter = {
  countMax: number;
  countMin: number;
};

// Инициализация состояния
const initialState: TypeSetCounter = {
  countMax: 0,
  countMin: 0,
};

export const changeCountMaxAC = createAction<{ countMax: number }>(
  "countMax/changeCountMax"
);
export const changeCountMinAC = createAction<{ countMin: number }>(
  "countMax/changeCountMin"
);

export const setCounterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCountMaxAC, (state, action) => {
      state.countMax = action.payload.countMax;
    })
    .addCase(changeCountMinAC, (state, action) => {
      state.countMin = action.payload.countMin;
    });
});

//thunk
export const setCountLocalStorageTC =
  (countMax: number, countMin: number) => () => {
    localStorage.setItem("maxValue", JSON.stringify(countMax));
    localStorage.setItem("minValue", JSON.stringify(countMin));
  };

export const getCountLocalStorageTC = () => (dispatch: Dispatch) => {
  const storedMaxValue = localStorage.getItem("maxValue");
  const storedMinValue = localStorage.getItem("minValue");

  if (storedMaxValue) {
    dispatch(changeCountMaxAC({ countMax: JSON.parse(storedMaxValue) }));
  }
  if (storedMinValue) {
    dispatch(changeCountMinAC({ countMin: JSON.parse(storedMinValue) }));
  }
};
