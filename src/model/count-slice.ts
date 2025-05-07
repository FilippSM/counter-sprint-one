import { createAppSlice } from "../utils/createAppSlice";

export const appSlice = createAppSlice({
  name: "app",
  initialState: {
    count: 0 as number,
    message: 0 as TypeMessage,
  },
  reducers: (create) => ({
    changeCountAC: create.reducer<{ count: number }>((state, action) => {
      state.count = action.payload.count;
    }),
    changeMessageAC: create.reducer<{ message: TypeMessage }>(
      (state, action) => {
        state.message = action.payload.message;
      }
    ),
  }),
  selectors: {
    selectCount: (state) => state.count,
    selectMessage: (state) => state.message,
  },
});

export const { changeCountAC, changeMessageAC } = appSlice.actions;
export const { selectCount, selectMessage } = appSlice.selectors;
export const appReducer = appSlice.reducer;

/* export const appReducer = appSlice.reducer */

export type TypeMessage = string | number;
