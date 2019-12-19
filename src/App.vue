<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dead By Roulette</v-toolbar-title>
    </v-app-bar>
    
    <v-content>
      <PerkDisplay />
    </v-content>
  </v-app>
</template>

<script>
import PerkDisplay from './components/PerkDisplay';

export default {
  name: 'App',

  components: {
    PerkDisplay,
  },

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  data: () => ({
    //
  }),
};
</script>
