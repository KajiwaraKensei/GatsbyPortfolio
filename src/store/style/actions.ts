import types from "./types";

export const setImageSelect = (select: number | null) => ({
  type: types.setSelect,
  payload: { select }
});
