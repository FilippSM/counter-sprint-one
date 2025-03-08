import { RootState } from "../app/store";
import { TypeSetCounter } from "./setCounter-reducer";

export const selectSetCounter = (state: RootState): TypeSetCounter => state.setCounter
