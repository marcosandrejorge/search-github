<template>
  <div>
    <Search @onSearch="search" />
    <DetailsUser v-if="showDetails" />
    <Alert v-model="showAlert" :text="textAlert" />
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Alert from '../components/Alert.vue'
import DetailsUser from '../components/DetailsUser.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Search,
    Alert,
    DetailsUser,
  },
  data() {
    return {
      showAlert: false,
      textAlert: '',
      showDetails: false,
    }
  },
  methods: {
    ...mapActions('search', ['getSearch']),
    async search($event) {
      this.showAlert = false
      try {
        await this.getSearch($event)
        this.showDetails = true
      } catch (error) {
        this.showDetails = false
        this.showAlert = true
        this.textAlert = 'Não foi posível recuperar a informação da busca'
      }
    },
  },
}
</script>
