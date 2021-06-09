<template>
  <v-toolbar color="primary" dark flat>
    <v-text-field
      v-model="search"
      class="mx-4"
      flat
      hide-details
      label="Search"
      solo-inverted
      append-icon="mdi-magnify"
      @click:append="onSearch"
      @keyup.enter.prevent="onSearch"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    }
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.search)
    },
  },
}
</script>

<style></style>
