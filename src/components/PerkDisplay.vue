<template>
  <div>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 class="mt-5">
        <v-btn color="accent" v-on:click="getPerks">Play the Roulette</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
    
  <v-container fluid>
    <v-row class="d-flex justify-space-around" v-on:change="randPerks">
      <perk-card
        v-for="perk in randPerks" :key="perk.name"
        :perk="perk"
      />
    </v-row>
  </v-container>
  </div>
</template>

<script>
import PerkCard from './PerkCard'

export default {
  name: 'PerkDisplay',
  props: ['perks'],
  components: {
    PerkCard,
  },
  methods: {
    getPerks() {
      let available = [];

      this.perks.forEach( function(perk) {
        if (perk.active === true) {
          available.push(perk);
        }
      })

      console.log(available.length)

      // Create random perk list
      if (available.length >= 4) {
        this.randPerks = [];
        while (this.randPerks.length < 4) {
          let perk = available[Math.floor(Math.random() * available.length)];
          if (!this.randPerks.includes(perk)) {
            this.randPerks.push(perk);
          }
        }
      } else {
        console.log('Not enough perks are active')
        /* TODO: Implement lack of perks alert */
      }
    }
  },
  data() {
    return {   
      randPerks: []
    }
  }
};
</script>
