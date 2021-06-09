<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="getUser.avatar_url"></v-img>

    <v-card-title>{{ getUser.name }}</v-card-title>

    <v-card-text>
      <div>{{ getUser.bio }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Quantidade de repositórios públicos</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>{{ getUser.public_repos }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Seguidores</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>{{ getUser.followers }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Seguindo</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>{{ getUser.following }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text target="_blank" :href="getUser.html_url"> Profile </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('search', ['getUser']),
  },
}
</script>

<style></style>
