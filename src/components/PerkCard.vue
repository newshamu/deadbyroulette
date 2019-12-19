<template>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-img
          :src="perk.link"
          max-width="256"
          max-height="256"
          class="ma-3"
        />
        <v-card-title class="justify-center">{{ perk.name }}</v-card-title>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'PerkCard',
    props: ['perk']
}
</script>