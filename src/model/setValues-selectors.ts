import { RootState } from "../app/store";
import { TypeValues } from "./setValues-reducer";

export const selectValues = (state: RootState): TypeValues => state.values
