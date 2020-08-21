import types from "./types"

export const setWindowWidth = (nextWidth: number) => ({
  type: types.setWindowWidth,
  payload: { nextWidth },
})
export const setAbleHome = () => ({
  type: types.setAbleHome,
  payload: {},
})
export const setLoad = () => ({
  type: types.setLoad,
})
