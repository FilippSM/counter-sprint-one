import { createAction, createReducer } from "@reduxjs/toolkit"

// Инициализация состояния
const initialState: { count: number } = {
    count: 0, // Изначально 0
};

export const changeCountAC = createAction<{ count: number }>(
    "message/changeMessage"
);

export const countReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCountAC, (state, action) => {
            state.count = action.payload.count
        })
})

