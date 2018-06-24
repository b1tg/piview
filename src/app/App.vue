<template>
  <div id="app">
    <div class="columns app-container">
      <div class="column sidebar is-3" v-show="showNav">
        <span class="brand"><img src="../assets/logo.png">智能家居设计</span>
        <navi></navi>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navi } from './navi/components'
export default {
  name: 'App',
  components: {
    Navi
  },
  created () {
    this.showNav = this.$route.path !== '/login'
  },
  computed:{
    showNav () {
      return this.$route.path !== '/login'
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.columns.app-container {
    flex: 1;
    display: block;
    padding: 0;
    margin: 0;
  }
    @media only screen and (min-device-width : 769px) {
    .columns.app-container {
      display: flex;
    }
  }
.columns.app-container:last-child {
    margin-bottom: 0;
  }
.sidebar {
  background-color:black;
    .brand {
      font-size: 24px;
      color: #ffffff;
      margin: 40px 0 20px 20px;
      vertical-align: top;
      img {
        margin: 4px;
        max-width: 24%;
        display: inline;
      }
    }
}

</style>
