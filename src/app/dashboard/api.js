import localforage from 'localforage'
export const savePost = (post) => {
  let posts
  localforage.getItem('posts').then(function (value) {
    posts = value || []
    posts.push(post)
    return localforage.setItem('posts', posts)
  }).catch(function (err) {
    console.log(err)
  })
}
export const fetchPosts = () => {
  return localforage.getItem('posts')
  // return localforage.startsWith(ACCOUNT_NAMESPACE).then((res) => {
  //   return res
  // })
}
