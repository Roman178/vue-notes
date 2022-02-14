<template>
  <header>
    <div class="header">
      <router-link to="/" class="link">
        <h1 class="title">Мои заметки</h1>
      </router-link>
      <button class="add-note-btn" @click="setIsPopupOpened(true)">
        добавить заметку
      </button>
    </div>

    <div
      v-if="isPopupOpened"
      class="popup"
      @click="setIsPopupOpened(false)"
    ></div>
    <form v-if="isPopupOpened" class="form" @submit.prevent="addNewNote">
      <label class="label" for="add-note-title">
        <h3>Заголовок заметки</h3>
        <input
          id="add-note-title"
          name="add-note-title"
          class="add-note-title"
          v-model="newNoteTitle"
          required
          minlength="1"
          type="text"
        />
        <span class="error-msg" v-if="invaligNewNoteTitle">
          Введите заголовок новой заметки
        </span>
      </label>

      <label class="label" for="add-note-text">
        <h3>Текст заметки</h3>
        <textarea
          id="add-note-text"
          name="add-note-text"
          class="add-note-text"
          v-model="newNoteText"
          required
          minlength="1"
        ></textarea>
        <span class="error-msg" v-if="invaligNewNoteText">
          Введите текст новой заметки
        </span>
      </label>

      <button
        class="add-note-btn"
        type="submit"
        :disabled="formIsInvalid || loading"
      >
        {{ loading ? "Создаём..." : "Создать новую заметку" }}
      </button>
    </form>
  </header>
</template>

<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Header extends Vue {
  @Action("addNote") addNote: any;
  isPopupOpened = false;
  newNoteText = "";
  newNoteTitle = "";
  invaligNewNoteText = true;
  invaligNewNoteTitle = true;
  loading = false;

  setIsPopupOpened(bool: boolean): void {
    this.isPopupOpened = bool;
  }

  async addNewNote(): Promise<void> {
    this.loading = true;
    await this.addNote({
      id: +new Date(),
      title: this.newNoteTitle,
      text: this.newNoteText,
    });
    this.newNoteText = "";
    this.newNoteTitle = "";
    this.loading = false;
    this.setIsPopupOpened(false);
  }

  get formIsInvalid(): boolean {
    return this.invaligNewNoteTitle || this.invaligNewNoteText;
  }

  @Watch("newNoteText")
  onChangeNewNoteText(value: string): void {
    this.invaligNewNoteText = value.length === 0;
  }

  @Watch("newNoteTitle")
  onChangeNewNoteTitle(value: string): void {
    this.invaligNewNoteTitle = value.length === 0;
  }
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

.header {
  height: 70px;
  background-color: $custom-grey;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding-left: 40px;
  display: flex;
  align-items: center;
}

.link {
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
}

.title {
  margin: 0;
  cursor: pointer;
}

.add-note-btn {
  @include button($primary);
}

.popup {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 3px solid black;
  min-height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.label {
  display: flex;
  flex-direction: column;
  min-height: 115px;
}

.label:last-of-type {
  flex-grow: 2;
  padding-bottom: 45px;
}

.error-msg {
  color: $error;
}

.add-note-title {
  font-size: 24px;
  font-weight: 700;
}

.add-note-text {
  font-size: 16px;
  flex-grow: 2;
}

.add-note-btn {
  @include button($primary);
  align-self: center;
}

.add-note-btn:disabled {
  @include disabled-button;
}
</style>
