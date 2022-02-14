<template>
  <div class="sidebar">
    <ul v-if="notes && currentNote" class="list">
      <li
        v-for="note of notes"
        @click="handleClick(note)"
        :key="note.id"
        class="note"
        :class="{ 'note-is-active': note.id === currentNote.id }"
      >
        <p>{{ note.title }}</p>
        <button
          :disabled="note.id === noteIdThatRemoving"
          class="remove-btn"
          @click.stop="handleRemoveBtnClick(note.id)"
        >
          {{ note.id === noteIdThatRemoving ? "удаляем..." : "удалить" }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { INote } from "@/store/types";

@Component
export default class Sidebar extends Vue {
  @State notes!: INote[];
  @State currentNote!: INote;
  @Action("setCurrentNote") setCurrentNote: any;
  @Action("removeNote") removeNote: any;
  noteIdThatRemoving = NaN;

  handleClick(note: INote): void {
    this.setCurrentNote(note);
    this.goToTheNoteContent(note.id);
  }

  async handleRemoveBtnClick(noteId: number): Promise<void> {
    this.noteIdThatRemoving = noteId;
    await this.removeNote(noteId);
    this.noteIdThatRemoving = NaN;

    if (this.currentNote.id === noteId) {
      this.$router.push("/");
      this.setCurrentNote({ id: NaN, title: "", text: "" });
    }
  }

  goToTheNoteContent(noteId: number): void {
    this.$router.push({
      path: "/notes",
      name: "NoteContent",
      params: { noteId: noteId.toString() },
    });
  }
}
</script>
<style lang="scss">
@import "../style/index.scss";

.sidebar {
  min-width: 320px;
  padding: 15px;
  background-color: $custom-grey;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  align-self: flex-start;
}

.list {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

.note {
  cursor: pointer;
  display: flex;
  min-height: 75px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.note:last-of-type {
  margin-bottom: 0;
}

.note-is-active {
  background-color: #3366ff;
  color: white;
}

.remove-btn {
  @include button($error);
}

.remove-btn:disabled {
  @include disabled-button;
}
</style>
