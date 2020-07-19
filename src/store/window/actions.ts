import types from "./types"

export const setWindowWidth = (nextWidth: number) => ({
  type: types.setWindowWidth,
  payload: { nextWidth },
})

export const setLoad = () => ({
  type: types.setLoad,
})
