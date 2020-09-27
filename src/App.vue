<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar app color="primary" dark style="height: 40px;">
      <v-switch v-model="themeSwitch" :label="theme" :dark="!themeSwitch"></v-switch>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  watch: {
    themeSwitch(val) {
      this.$vuetify.theme.dark = val;
    },
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  data: () => ({
    themeSwitch: true,
  }),
};
</script>
