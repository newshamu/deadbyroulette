<template>
    <v-btn
      v-on:click="$emit('select-all-perks')"
    >
      Select All
    </v-btn>
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