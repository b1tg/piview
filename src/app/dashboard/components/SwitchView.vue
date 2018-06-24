<template>
  <div id="switch">
    <div class="container">
      <h1 class="title"> 开关1</h1>
      <div class="field">
        <input id="switchColorDefault" type="checkbox" name="switchColorDefault"
          class="switch" v-model="switches['1']" @change="toggleSwitch1">
        <label for="switchColorDefault">红色LED</label>
      </div>
      <br>
      <br>
      <h1 class="title"> 开关2</h1>
      <div class="field">
        <input id="switchColorSuccess" type="checkbox" name="switchColorSuccess"
          class="switch is-success" v-model="switches['2']" @change="toggleSwitch2">
        <label for="switchColorSuccess">黄色LED</label>
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
        '1': null,
        '2': null
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
          // console.log(res.data)
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
  mounted () {
    this.fetch_switch()
    // console.log('switch mounted')
    // this.tick = setInterval(this.fetech_switch, 3000)
  },
  destroyed () {
    if (this.tick) {
      clearInterval(this.tick)
    }
  },
  methods: {
    toggleSwitch1 (a, b) {
      // console.log(a, a.target.checked)

    },
    toggleSwitch2 (a, b) {
      // console.log(a, b)
    },
    fetch_switch () {
      this.$http({
        url: '/api/switches',
        method: 'GET'
      }).then(res => {
        // console.log(res)
        this.switches['1'] = res.data['1']
        this.switches['2'] = res.data['2']
      })
    }
  }
}
</script>

<style scoped lang='scss'>
#switch {
    // color:aquamarine;
}
</style>
