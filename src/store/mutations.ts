import { MutationTree } from "vuex";
import { MutationTypes as mt } from "./mutation-types";
import { State } from "./state";
import { INote } from "./types";

type NewType<S> = {
  [mt.SET_NOTES](state: S, notes: INote[]): void;
  [mt.ADD_NOTE](state: S, note: INote): void;
  [mt.SET_CURRENT_NOTE](state: S, note: INote): void;
  [mt.UPDATE_NOTE](state: S, notes: INote[]): void;
};

export type Mutations<S = State> = NewType<S>;

export const mutations: MutationTree<State> & Mutations = {
  [mt.SET_NOTES](state, notes: INote[]) {
    state.notes = notes;
  },
  [mt.ADD_NOTE](state, note: INote) {
    state.notes.push(note);
  },
  [mt.SET_CURRENT_NOTE](state, note: INote) {
    state.currentNote = note;
  },
  [mt.REMOVE_NOTE](state, removedNoteId: number) {
    state.notes = state.notes.filter((note) => note.id !== removedNoteId);
  },
  [mt.UPDATE_NOTE](state, updatedNotes: INote[]) {
    state.notes = updatedNotes;
  },
};
