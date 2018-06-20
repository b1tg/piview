<template>
  <div id="navigation-view">
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li><router-link :to="{ name: 'switch' }">Switch</router-link></li>
      <li><router-link :to="{ name: 'control' }">Control</router-link></li>
      <li><router-link :to="{ name: 'camera' }">Camera</router-link></li>
      <li><router-link :to="{ name: 'timeline' }">Timeline</router-link></li>
      <li><router-link :to="{ name: 'demo' }">Demo</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'navi'
}
</script>

<style scoped lang='scss'>
  ul {
    margin-top: 50px;

    li {
      border-bottom: 2px solid rgb(31, 78, 93);
      font-size: 1.8em;
      padding-left: 20px;
      margin: 18px 20px;

      a {
        color: #ffffff;
      }

      ul {
        margin-top: 20px;

        li {
          font-size: 0.6em;
          border: none;

          span {
            float: right;
          }
        }
      }
    }
  }
</style>
