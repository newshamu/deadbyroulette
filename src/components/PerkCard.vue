<template>
    <v-flex xs2>
      <v-card>
        <v-img
          :src="perk.link"
          max-width="196"
          max-height="196"
          class="ma-3"
        />
        <v-card-title>{{ perk.name }}</v-card-title>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'PerkCard',
    props: ['perk']
}
</script>