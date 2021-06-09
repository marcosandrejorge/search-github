import axios from 'axios'
const url = 'https://api.github.com/users/'
export default {
  namespaced: true,
  state: {
    user: {
      name: '',
      avatar_url: '',
      bio: '',
      public_repos: 0,
      followers: 0,
      following: 0,
      html_url: '',
    },
    repositories: [],
  },
  getters: {
    getUser(state) {
      return { ...state.user }
    },
  },
  mutations: {
    setUser(state, payload) {
      let { name, avatar_url, bio, public_repos, followers, following, html_url } = payload
      state.user = {
        name,
        avatar_url,
        bio,
        public_repos,
        followers,
        following,
        html_url,
      }
    },
  },
  actions: {
    getSearch({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${url}${data}`)
          .then((result) => {
            commit('setUser', result.data)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
