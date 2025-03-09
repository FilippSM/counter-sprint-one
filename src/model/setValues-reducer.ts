import { createAction, createReducer } from "@reduxjs/toolkit"

export type TypeValues = {
    maxValue: number;
    minValue: number;
};

// Инициализация состояния
const initialState: TypeValues = {
    maxValue: 5, 
    minValue: 0, 
}

export const changeMaxValueAC = createAction<{ maxValue: number }>(
    "countMax/changeMaxValue"
);
export const changeMinValueAC = createAction<{ minValue: number }>(
    "countMax/changeMinValue"
);

export const valuesReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.maxValue
        })
        .addCase(changeMinValueAC, (state, action) => {
            state.minValue = action.payload.minValue
        })
})

