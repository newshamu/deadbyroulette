<template>
  <v-container>
    <v-layout
        text-center
        wrap
      >
        <v-flex xs12 class="mt-5">
          <v-btn
            color="accent"
            v-on:click="$emit('select-all-perks')"
          >
            Select All
          </v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SelectAll',
  props: ['perks'],
  data() {
    return {
      sPerks: this.perks
    }
  }
}
</script>