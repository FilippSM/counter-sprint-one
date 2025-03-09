import { RootState } from "../app/store";

export const selectCount = (state: RootState): number => state.count.count