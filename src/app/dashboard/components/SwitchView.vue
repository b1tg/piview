<template>
  <div id="switch">
    <div class="container">
      <h1 class="title"># 开关1</h1>
      <div class="field">
        <input id="switchColorDefault" type="checkbox" name="switchColorDefault"
          class="switch" v-model="switches['1']" @change="toggleSwitch1">
        <label for="switchColorDefault">Switch default</label>
      </div>

      <h1 class="title"># 开关2</h1>
      <div class="field">
        <input id="switchColorSuccess" type="checkbox" name="switchColorSuccess"
          class="switch is-success" v-model="switches['2']" @change="toggleSwitch2">
        <label for="switchColorSuccess">Switch success</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switch-view',
  data: function () {
    return {
      // switch1: false,
      // switch2: false
      switches: {
        '1': false,
        '2': true
      }
    }
  },
  watch: {
    switches: {
      handler: function (value) {
        this.$http({
          url: '/api/switches',
          method: 'GET',
          params: { 's1': value['1'], 's2': value['2'] }
        }).then(res => {
          console.log(res.data)
        })
      },
      deep: true
    }
    // switch1: function (value) {
    //   this.$http({
    //     url: '/api/switch/1',
    //     method: 'GET',
    //     params: { 'value': value }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // },
    // switch2: function (value) {

    // }
  },
  methods: {
    toggleSwitch1 (a, b) {
      // console.log(a, a.target.checked)

    },
    toggleSwitch2 (a, b) {
      // console.log(a, b)
    }
  }
}
</script>

<style scoped lang='scss'>
#switch {
    // color:aquamarine;
}
</style>
