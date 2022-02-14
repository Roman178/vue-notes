<template>
  <div id="app">
    <Header />
    <main>
      <Spinner v-if="loading" />
      <div v-else class="content">
        <Sidebar />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Spinner from "@/components/Spinner.vue";

import { INote } from "./store/types";

@Component({
  components: { Header, Sidebar, Spinner },
})
export default class App extends Vue {
  @Action("getNotes") private getNotes: any;
  @Action("setCurrentNote") private setCurrentNote: any;
  @State("notes") notes!: INote[];
  loading = false;

  async created(): Promise<void> {
    this.loading = true;
    await this.getNotes();
    if (this.$route.params.noteId) {
      this.setCurrentNote(
        this.notes.find((n) => n.id.toString() === this.$route.params.noteId)
      );
    }
    this.loading = false;
  }
}
</script>

<style>
@import "./global.scss";

.content {
  display: flex;
}
</style>
