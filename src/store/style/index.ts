import { Actions } from "../actions"
import * as actions from "./actions"

interface State {
  select: number | null
}

export const initialState = (injects?: State): State => ({
  select: null,
  ...injects,
})

export const reducer = (state = initialState(), action: Actions): State => {
  switch (action.type) {
    case "STYLE_SET_IMAGE_SELECT":
      return { ...state, select: action.payload.select }
    default:
      return state
  }
}

export const actionCreator = {
  ...actions,
}
