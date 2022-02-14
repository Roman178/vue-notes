import { INote } from "./types";

export const state = {
  notes: [] as INote[],
  currentNote: {
    id: NaN,
    title: "",
    text: "",
  } as INote,
};

export type State = typeof state;
