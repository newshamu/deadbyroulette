<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon large>mdi-rhombus-split</v-icon>
        </v-btn>
        <v-spacer />
      </template>
      <v-card>
        <v-card-title>Select Perks</v-card-title>
        <v-divider />
        <v-card-text>
          <v-container fluid>
            <v-col v-for="perk in perks" :key="perk.name">
              <v-btn
                v-model="perk.active"
                :color="perk.active ? 'accent' : 'grey.darken-3'"
                block
                v-on:click="toggle(perk)"
              >
                {{ perk.name }}
              </v-btn>
            </v-col>
          </v-container>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-container fluid>
            <v-layout>
              <v-btn color="red darken-3" text @click="selectAllPerks()">Toggle All</v-btn>
              <v-spacer />
              <v-btn color="red darken-3" text @click="dialog = false">Close</v-btn>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'PerkDialog',
  props: ['perks'],

  data() {
    return {
      dialog: false,
      sPerks: this.perks,
    }
  },

  methods: {
    toggle(perk) {
      perk.active = !perk.active
    },

    selectAllPerks() {
      let allSelected = true;
      this.sPerks.forEach( function (perk) {
        if (!perk.active) {
          allSelected = false;
        }
      })

      // Set all to true
      if (!allSelected) {
        console.log('set to true')
        this.sPerks.forEach( function (perk) {
          perk.active = true;
        })
      // Set all to false
      } else {
        console.log('set to false')
        this.sPerks.forEach( function (perk) {
          perk.active = false;
        })
      }
    }
  }
}
</script>