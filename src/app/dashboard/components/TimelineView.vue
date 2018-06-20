<template>
  <div id="tl">
    <div class="container">
        <div class="timeline">
            <header class="timeline-header">
                <span class="tag is-medium is-primary">Start</span>
            </header>
            <div v-for="(post, index) in posts" :key="index">
                <div class="timeline-item">
                    <div class="timeline-marker is-primary"></div>
                    <div class="timeline-content">
                        <p class="heading">{{ post.title| moment('MMMM Do YYYY, HH:mm:ss') }}</p>
                        <p>{{ post.content }}</p>
                    </div>
                </div>
            <!-- <div class="timeline-item">
                <div class="timeline-marker is-warning is-image is-32x32">
                    <img src="http://bulma.io/images/placeholders/32x32.png">
                </div>
                <div class="timeline-content">
                    <p class="heading">February 2016</p>
                    <p>Timeline content - Can include any HTML element</p>
                </div>
            </div> -->
            </div>
            <div class="timeline-header">
                <span class="tag is-medium is-primary">Now</span>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="field">
            <div class="control">
                <textarea v-model="new_post" class="textarea is-warning" type="text" placeholder="Writing here!"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="submit_post">Submit</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { moment } from '../../../filters'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'timeline-view',
  data () {
    return {
      new_post: ''
      // posts: [
      //   {'title': '好日子', 'content': '今天是个好日子'},
      //   {'title': 'sfsf', 'content': 'sfsf'},
      //   {'title': '好12日子', 'content': 'faf'}
      // ]
    }
  },
  filters: {
    moment
  },
  created: function () {
    // let c = 'fsf'
    // let d = moment(new Date(), 'MMMM Do YYYY, HH:mm:ss')
    // this.posts.push({'title': d, 'content': c})
  },
  mounted () {
    this.loadPosts()
  },
  methods: {
    ...mapActions([
      'addPost',
      'loadPosts'
    ]),
    submit_post: function () {
      // let now = moment(new Date(), 'MMMM Do YYYY, HH:mm:ss')
      let now = new Date()
      // this.posts.push({'title': now, 'content': this.new_post})
      this.addPost({'title': now, 'content': this.new_post})
      this.new_post = ''
    }
  },
  computed: {
    ...mapState({
      'posts': state => state.dashboard.posts
    })
  }
}
</script>

<style scoped lang='scss'>
#tl {
    // color:aquamarine;
}
</style>
