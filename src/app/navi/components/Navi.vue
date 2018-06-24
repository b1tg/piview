<template>
  <div id="navigation-view">
    <!-- <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }">传感器</router-link>
      </li>
      <li class="active"><router-link :to="{ name: 'switch' }" >开关</router-link></li>
      <li><router-link :to="{ name: 'control' }">红外控制</router-link></li>
      <li><router-link :to="{ name: 'camera' }">监控</router-link></li>
    </ul> -->
    <el-menu :default-active="onRoutes"
            unique-opened router
            background-color="black"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">
        <el-menu-item index="/dashboard">
            <i class="el-icon-star-on"></i>传感器
        </el-menu-item>
        <el-menu-item index="/switch">
            <i class="el-icon-menu"></i>开关
        </el-menu-item>
        <el-menu-item index="/camera">
            <i class="el-icon-view"></i>监控
        </el-menu-item>
        <!-- <el-menu-item index="/logout">
            <i class="el-icon-view"></i>logout
        </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import Auth from "../../dashboard/auth.js";

export default {
  name: 'navi',

  computed:{
      onRoutes(){
        return this.$route.path
      }
  },
  methods: {
    handleSelect: function (key) {
      // console.log(key)
        if(key == 'logout'){
          Auth.logout(this)
        }
    }
  }
}
</script>

<style scoped lang='scss'>
  // .active {
  //   a {
  //     color: red;
  //   }
  // }
  // ul {
  //   margin-top: 50px;

  //   li {
  //     border-bottom: 2px solid rgb(31, 78, 93);
  //     font-size: 1.8em;
  //     padding-left: 20px;
  //     margin: 18px 20px;

  //     a {
  //       // color: #ffffff;
  //     }

  //     ul {
  //       margin-top: 20px;

  //       li {
  //         font-size: 0.6em;
  //         border: none;

  //         span {
  //           float: right;
  //         }
  //       }
  //     }
  //   }
  // }
</style>
