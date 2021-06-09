<template>
  <v-snackbar :value="showAlert" @input="input" :color="color">
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  model: {
    prop: 'showAlert',
  },
  props: {
    color: {
      type: String,
      default: 'error',
    },
    showAlert: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    input($event) {
      this.$emit('input', $event)
    },
  },
}
</script>

<style></style>
