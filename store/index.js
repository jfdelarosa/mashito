export const state = () => ({
  user: null,
})

export const mutations = {
  updateUser(state, { key, value }) {
    if (state.user === null) {
      state.user = {}
    }
    state.user[key] = value
  },
  logout(state) {
    state.user = null
  },
}
