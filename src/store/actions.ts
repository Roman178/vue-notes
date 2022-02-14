import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { MutationTypes as mt } from "./mutation-types";
import {
  fetchNotes,
  addNoteApi,
  removeNoteApi,
  updateNoteApi,
} from "@/shared/data.service";
import { INote } from "./types";

export interface Actions {
  getNotes(context: ActionContext<State, State>): void;
  addNote(context: ActionContext<State, State>, note: INote): void;
  setCurrentNote(context: ActionContext<State, State>, note: INote): void;
  removeNote(context: ActionContext<State, State>, noteId: number): void;
  updateNote(context: ActionContext<State, State>, note: INote): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async getNotes({ commit }) {
    const notes = await fetchNotes();
    commit(mt.SET_NOTES, notes);
  },

  async addNote({ commit }, note) {
    const newNote = await addNoteApi(note);
    commit(mt.ADD_NOTE, newNote);
  },

  async removeNote({ commit }, noteId) {
    const removedNote: INote = await removeNoteApi(noteId);
    commit(mt.REMOVE_NOTE, removedNote.id);
  },

  async updateNote({ commit }, note) {
    const updatedNotes: INote[] = await updateNoteApi(note);
    commit(mt.UPDATE_NOTE, updatedNotes);
  },

  setCurrentNote({ commit }, note) {
    commit(mt.SET_CURRENT_NOTE, note);
  },
};
