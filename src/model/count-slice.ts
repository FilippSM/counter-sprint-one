import { createAppSlice } from "../utils/createAppSlice";

export const appSlice = createAppSlice({
  name: "app",
  initialState: {
    count: 0 as number,
    message: 0 as TypeMessage,
    setCounter: {
      countMax: 0 as number,
      countMin: 0 as number,
    },
    setValues: {
      maxValue: 5 as number,
      minValue: 0 as number,
    }
  },
  reducers: (create) => ({
    // actions
    changeCountAC: create.reducer<{ count: number }>((state, action) => {
      state.count = action.payload.count;
    }),
    changeMessageAC: create.reducer<{ message: TypeMessage }>(
      (state, action) => {
        state.message = action.payload.message;
      }
    ),
    changeCountMaxAC: create.reducer<{ countMax: number }>(
      (state, action) => {
        state.setCounter.countMax = action.payload.countMax;
      }
    ),
    changeCountMinAC: create.reducer<{ countMin: number }>(
      (state, action) => {
        state.setCounter.countMin = action.payload.countMin;
      }
    ),
    changeMaxValueAC: create.reducer<{ maxValue: number }>(
      (state, action) => {
        state.setValues.maxValue = action.payload.maxValue;
      }
    ),
    changeMinValueAC: create.reducer<{ minValue: number }>(
      (state, action) => {
        state.setValues.minValue = action.payload.minValue;
      }
    ),
    // thunk
    setCountLocalStorageTC: create.asyncThunk(
      async ({ countMax, countMin }: { countMax: number; countMin: number }) => {
        localStorage.setItem("maxValue", JSON.stringify(countMax));
        localStorage.setItem("minValue", JSON.stringify(countMin));
      }
    ),
    getCountLocalStorageTC: create.asyncThunk(
      async (_, { dispatch }) => {
        const storedMaxValue = localStorage.getItem("maxValue");
        const storedMinValue = localStorage.getItem("minValue");

        if (storedMaxValue) {
          dispatch(changeCountMaxAC({ countMax: JSON.parse(storedMaxValue) }));
        }
        if (storedMinValue) {
          dispatch(changeCountMinAC({ countMin: JSON.parse(storedMinValue) }));
        }
      }
    ),

  }),
  selectors: {
    selectCount: (state) => state.count,
    selectMessage: (state) => state.message,
    selectSetCounter: (state) => state.setCounter,
    selectValues: (state) => state.setValues,
  },
});

export const { changeCountAC, changeMessageAC, changeCountMaxAC, changeCountMinAC, 
  setCountLocalStorageTC, getCountLocalStorageTC, changeMaxValueAC, changeMinValueAC} = appSlice.actions;
export const { selectCount, selectMessage, selectSetCounter, selectValues } = appSlice.selectors;
export const appReducer = appSlice.reducer;


export type TypeMessage = string | number;

