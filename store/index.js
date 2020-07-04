export const state = () => ({
  user: null,
})

export const mutations = {
  updateUser(state, payload) {
    if (state.user === null) {
      state.user = {}
    }
    for (const key of Object.keys(payload)) {
      state.user[key] = payload[key]
    }
  },
  logout(state) {
    state.user = null
  },
}
