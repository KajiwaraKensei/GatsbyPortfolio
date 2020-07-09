import { combineReducers } from "redux";
import * as Window from "./window";
import * as Style from "./style";
// ______________________________________________________
//

export const initialState = () => ({
  window: Window.initialState(),
  style: Style.initialState()
});

// ______________________________________________________
//

export const reducer = combineReducers({
  window: Window.reducer,
  style: Style.reducer
});
