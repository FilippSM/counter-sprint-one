import { createAction, createReducer } from "@reduxjs/toolkit"
export type TypeMessage = string | number;

// Инициализация состояния
const initialState: { message: TypeMessage } = {
    message: 0, // Изначально 0
};

export const changeMessageAC = createAction<{ message: TypeMessage }>(
    "message/changeMessage"
);

export const messageReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeMessageAC, (state, action) => {
            state.message = action.payload.message
        })
})

