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
      <Perk-display :perks="perks" />
      <perk-select
        class="ma-5"
        :perks="perks"
        v-on:update-perks="updatePerks"
      />
    </v-content>
  </v-app>
</template>

<script>
import PerkSelect from './components/PerkSelect'
import PerkDisplay from './components/PerkDisplay'
import survivorPerks from '../static/SurvivorPerks'

export default {
  name: 'App',

  components: {
    PerkSelect,
    PerkDisplay
  },

  mounted() {
    this.perks = survivorPerks
  },

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  methods: {
    updatePerks(perks) {
      this.perks = perks
    }
  },

  data() {
    return {
      perks: survivorPerks,
    }
  }
};
</script>
