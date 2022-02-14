<template>
  <div v-if="currentNote" class="note-content">
    <div v-if="!isEditMode">
      <button
        class="edit-note-btn"
        name="edit-note-btn"
        @click="toggleEditMode(true)"
      >
        редактировать заметку
      </button>
      <h2 class="note-title">{{ currentNote.title }}</h2>
      <p class="note-text">{{ currentNote.text }}</p>
    </div>
    <form v-else class="edit-form" @submit.prevent="updateCurrentNote">
      <div class="btns">
        <button
          :disabled="
            innerCurrentNote.title.length === 0 ||
            innerCurrentNote.text.length === 0 ||
            loading
          "
          type="submit"
          class="save-note-btn"
          name="save-note-btn"
        >
          {{ loading ? "Сохраняем..." : "Сохранить" }}
        </button>
        <button class="cancel-btn" @click="toggleEditMode(false)">
          отмена
        </button>
      </div>
      <label class="note-title-label" for="note-title-input">
        <input
          id="note-title-input"
          name="note-title-input"
          class="note-title-input"
          type="text"
          v-model="innerCurrentNote.title"
          required
          minlength="1"
        />
        <span v-if="innerCurrentNote.title.length === 0" class="error-msg"
          >Введите заголовок заметки</span
        >
      </label>
      <label class="note-text-label" for="note-text-textarea">
        <textarea
          id="note-text-textarea"
          name="note-text-textarea"
          class="note-text-textarea"
          v-model="innerCurrentNote.text"
          required
          minlength="1"
        >
        </textarea>
        <span v-if="innerCurrentNote.text.length === 0" class="error-msg"
          >Введите текст заметки</span
        >
      </label>
    </form>
  </div>
</template>

<script lang="ts">
import { INote } from "@/store/types";
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";

@Component
export default class NoteContent extends Vue {
  @State("currentNote") currentNote!: INote;
  @Action("updateNote") updateNote: any;
  @Action("setCurrentNote") private setCurrentNote: any;

  isEditMode = false;
  innerCurrentNote: INote = { id: NaN, title: "", text: "" };
  loading = false;

  created(): void {
    this.innerCurrentNote = { ...this.currentNote };
  }

  isIgnoredElementOnWindowClick(elementName: string): boolean {
    return (
      elementName === "save-note-btn" ||
      elementName === "note-title-input" ||
      elementName === "note-text-textarea" ||
      elementName === "edit-note-btn"
    );
  }

  toggleEditMode(bool: boolean): void {
    this.isEditMode = bool;
    if (bool === true) {
      const handleOuterClick = (evt: any) => {
        // eslint-disable-next-line no-useless-return
        if (this.isIgnoredElementOnWindowClick(evt.target.name)) return;
        else {
          this.toggleEditMode(false);
          window.removeEventListener("click", handleOuterClick);
        }
      };
      window.addEventListener("click", handleOuterClick);
    } else {
      this.innerCurrentNote = { ...this.currentNote };
    }
  }

  async updateCurrentNote(): Promise<void> {
    this.loading = true;

    await this.updateNote({
      ...this.currentNote,
      text: this.innerCurrentNote.text,
      title: this.innerCurrentNote.title,
    });

    this.loading = false;

    this.setCurrentNote({
      ...this.currentNote,
      text: this.innerCurrentNote.text,
      title: this.innerCurrentNote.title,
    });
    this.toggleEditMode(false);
  }

  @Watch("currentNote")
  setInnerCurrent(): void {
    this.innerCurrentNote = { ...this.currentNote };
  }
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

.edit-note-btn {
  @include button($primary);
}

.note-content {
  padding: 20px;
}

.note-title {
  margin: 20px 0 40px 0;
  color: $primary;
  font-size: 32px;
  font-weight: 700;
}

.note-text {
  font-size: 16px;
  margin: 0;
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.btns {
  margin-bottom: 20px;
}

.save-note-btn,
.cancel-btn {
  @include button($primary);
  margin-right: 10px;
}

.save-note-btn:disabled {
  @include disabled-button;
}

.note-title-label {
  display: flex;
  flex-direction: column;
  min-height: 80px;
}

.note-text-label {
  display: flex;
  flex-direction: column;
  min-height: 80px;
}

.note-title-input {
  font-size: 32px;
  color: $primary;
  font-weight: 700;
}

.note-text-textarea {
  font-size: 16px;
}

.error-msg {
  color: $error;
}
</style>
