export default {
  DO_SOMETHING (state, { data }) {
    state.something = data
  },
  ADD_POST (state, payload) {
    // state.accounts[payload.account.id] = payload.account
    state.posts.push(payload.post)
  },
  LOAD_POSTS (state, payload) {
    state.posts = payload
  }
}
