<template>
  <v-container fluid>
    <v-row class="d-flex justify-space-around" v-for="perk in perks" :key="perk.name">
      <v-flex>
        <v-checkbox
          v-model="perk.active"
          :label="perk.name"
        />
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
  }

    
}
</script>