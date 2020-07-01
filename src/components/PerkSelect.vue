<template>
  <v-container fluid>
    <v-row class="d-flex justify-space-around" v-for="perk in perks" :key="perk.name">
      <v-flex xs-6>
        <v-btn
          v-model="perk.active"
          :color="perk.active ? 'red darken-3' : 'grey darken-3'"
          v-on:click="toggle(perk)"
        >
          {{ perk.name }}
        </v-btn>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PerkSelect',
  props: ['perks'],

  data() {
    return {
      sPerks: this.perks
    }
  },

  methods: {
    toggle(perk) {
      perk.active = !perk.active;
    }
  } 
}
</script>