import { savePost, fetchPosts } from '../api'
export const doSomething = ({ commit }, data) => {
  commit('DO_SOMETHING', { data: data })
}

export const addPost = ({ commit }, data) => {
  commit('ADD_POST', { post: data })
  savePost(data)
}

export const loadPosts = ({ state, commit }) => {
  // loads posts only if they are not already loaded
  // if (!state.posts || Object.keys(state.posts).length === 0) {
  if (state.posts.length === 0) {
    return fetchPosts().then((res) => {
      res = res || []
      commit('LOAD_POSTS', res)
    })
  }
}
// export const updateAccount = ({ commit }, data) => {
//   commit('UPDATE_ACCOUNT', { account: data })
// }
// export const deleteAccount = ({ commit }, data) => {
//   commit('DELETE_ACCOUNT', { account: data })
// }
