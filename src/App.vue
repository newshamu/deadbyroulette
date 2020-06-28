<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dead By Roulette</v-toolbar-title>
      <v-spacer />
      <div>Latest Update: Silent Hill</div>
    </v-app-bar>
    
    <v-content>
      <perk-display :perks="perks" />
      <select-all v-on:select-all-perks="selectAllPerks" />
      <perk-select
        class="ma-5"
        :perks="perks"
      />
    </v-content>
  </v-app>
</template>

<script>
import PerkSelect from './components/PerkSelect'
import SelectAll from './components/SelectAll'
import PerkDisplay from './components/PerkDisplay'
import survivorPerks from '../static/SurvivorPerks'

export default {
  name: 'App',

  components: {
    SelectAll,
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
    selectAllPerks() {
      let allSelected = true;
      this.perks.forEach( function (perk) {
        if (!perk.active) {
          allSelected = false;
        }
      })

      // Set all to true
      if (!allSelected) {
        console.log('set to true')
        this.perks.forEach( function (perk) {
          perk.active = true;
        })
      // Set all to false
      } else {
        console.log('set to false')
        this.perks.forEach( function (perk) {
          perk.active = false;
        })
      }
    }
  },

  data() {
    return {
      perks: survivorPerks,
    }
  }
};
</script>
