import { createAction, createReducer } from "@reduxjs/toolkit"

export type TypeSetCounter = {
    countMax: number;
    countMin: number;
};

// Инициализация состояния
const initialState: TypeSetCounter = {
    countMax: 0, 
    countMin: 0, 
}

export const changeCountMaxAC = createAction<{ countMax: number }>(
    "countMax/changeCountMax"
);
export const changeCountMinAC = createAction<{ countMin: number }>(
    "countMax/changeCountMin"
);

export const setCounterReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCountMaxAC, (state, action) => {
            state.countMax = action.payload.countMax
        })
        .addCase(changeCountMinAC, (state, action) => {
            state.countMin = action.payload.countMin
        })
})

