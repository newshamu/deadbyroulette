<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      dense
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dead By Roulette</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <perk-dialog :perks="perks" />
      </v-toolbar-items>
    </v-app-bar>
    
    <v-main>
      <v-alert
        :value="perkAlert"
        type="warning"
        border="left"
        dark
        transition="scale-transition"
        class="ma-5"
      >
        WARNING: Not enough active perks. Select at least four perks.
      </v-alert>
      <perk-display :perks="perks" @perk-alert="handlePerkAlert($event)" />
    </v-main>

    <v-footer color="primary">
      <span>Latest Update: Silent Hill</span>
      <v-spacer />
      <v-btn icon @click="goToGitHub()">
        <v-icon large>mdi-github</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import PerkDialog from './components/PerkDialog'
import PerkDisplay from './components/PerkDisplay'
import survivorPerks from '../static/SurvivorPerks'

export default {
  name: 'App',

  components: {
    PerkDialog,
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

  data() {
    return {
      perks: survivorPerks,
      perkAlert: false,
    }
  },

  methods: {
    handlePerkAlert: function (perkAlert) {
      if (perkAlert && this.perkAlert) {
        this.perkAlert = false
        setTimeout( () => {
          this.perkAlert = true
        }, 250)
      } else {
        this.perkAlert = perkAlert
      }
    },
    goToGitHub: function () {
      window.open('https://github.com/newshamu/deadbyroulette', '_blank')
    }
  }
};
</script>
