import { Actions } from "../actions";
import * as actions from "./actions";

export type WindowType = "phone" | "tablet" | "pc";
interface State {
  width: number;
  type: WindowType;
  breakPoint: number;
}

export const initialState = (injects?: State): State => ({
  width: 0,
  breakPoint: 770,
  type: "phone",
  ...injects
});

export const reducer = (state = initialState(), action: Actions): State => {
  switch (action.type) {
    case "WINDOW_SET_WINDOW_WIDTH":
      return { ...state, type: changeMode(state, action.payload.nextWidth) };
    default:
      return state;
  }
};

const changeMode = (state: State, width: number) => {
  if (width > 1000) {
    return "pc";
  }
  if (width > 770) {
    return "tablet";
  }
  return "phone";
};
export const actionCreator = {
  ...actions
};
