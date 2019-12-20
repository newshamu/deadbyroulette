<template>
  <div>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 class="mt-5">
        <v-btn color="secondary" v-on:click="getPerks">Play the Roulette</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
    
  <v-container fluid v-if="showPerks">
    <v-row class="d-flex justify-space-around" v-on:change="randPerks">
      <perk-card
        v-for="perk in randPerks" :key="perk.name"
        :perk="perk"
        v-on:perk-list-change="updateAvailablePerks"
      />
    </v-row>
  </v-container>
  </div>
</template>

<script>
import PerkCard from './PerkCard'

export default {
  name: 'PerkDisplay',
  props: ['availablePerks'],
  components: {
    PerkCard,
  },
  methods: {
    getPerks() {
      // Set up vars
      this.randPerks = [];
      console.log(this.availablePerks)
      const keys = Object.keys(this.availablePerks);

      // Create random perk list
      while (this.randPerks.length < 4) {
        let key = keys[Math.floor(Math.random() * keys.length)];
        console.log(key)
        let perk = {
          'name': key,
          'link': this.availablePerks[key]
        }
        if (!this.randPerks.includes(perk)) {
          this.randPerks.push(perk);
        }
      }
      this.showPerks = true;
    },

    updateAvailablePerks(availablePerks) {
      this.availablePerks = availablePerks
    }
  },
  data() {
    return {   
      showPerks: false, 
      randPerks: []
    }
  }
};
</script>
