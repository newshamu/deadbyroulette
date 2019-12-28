<template>
  <v-container fluid>
    <v-row class="d-flex justify-space-around">
      <v-col class="ma-2" cols="2" v-for="perk in perks" :key="perk.name">
        <v-card tile hover>
          <v-btn
            v-model="perk.active"
            :color="perk.active ? 'primary' : accent"
            block
            v-on:click="toggle(perk)"
          >
            {{ perk.name }}
          </v-btn>
        </v-card>
      </v-col>
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