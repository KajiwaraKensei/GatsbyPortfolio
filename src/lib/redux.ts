import { useSelector, useDispatch } from "react-redux"
import { RootState, actionCreator } from "~/store"

export const useWindowSize = () => {
  const state = useSelector((state: RootState) => ({
    load: state.window.load,
    type: state.window.type,
  }))
  const dispatch = useDispatch()
  const setWindow = (nextWidth: number) => {
    dispatch(actionCreator.window.setWindowWidth(nextWidth))
  }
  return { state, setWindow, dispatch }
}
