<template>
  <v-flex>
    <v-select
      v-model="selectedPerks"
      :items="availablePerks"
      label="Available Perks"
      dense
      item-text="name"
      item-value="link"
      return-object
      v-on:input="emitChange"
    >

    </v-select>
  </v-flex>
</template>

<script>
export default {
  name: 'PerkSelect',
  props: ['availablePerks'],

  data() {
    return {
      selectedPerks: []
    }
  },

  mounted() {
    this.selectedPerks = this.availablePerks
  },

  methods: {
    emitChange() {
      this.$emit('perk-list-change', this.selectedPerks)
    },
  }
}
</script>