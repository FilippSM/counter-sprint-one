import { RootState } from "../app/store";
import { TypeMessage } from "./message-reducer";

export const selectMessage = (state: RootState): TypeMessage => state.message.message