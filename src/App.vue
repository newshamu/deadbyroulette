<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dead By Roulette</v-toolbar-title>
    </v-app-bar>
    
    <v-content>
      <PerkList/>
    </v-content>
  </v-app>
</template>

<script>
import PerkList from './components/PerkList';

export default {
  name: 'App',

  components: {
    PerkList,
  },

  data: () => ({
    //
  }),
};
</script>
