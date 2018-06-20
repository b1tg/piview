<template>
  <div id="dashboard">
    <div class="container">
      <h1 class="title"># sensors1</h1>
      <div v-if="sensor1.level" class="notification is-danger" style="width:50%;">
      invest ivagation！
      </div>
      <div v-else class="notification is-primary" style="width:50%;">
      all clear!
      </div>
    </div>
    <div class="container">
      <h1 class="title"># sensors2</h1>
      <div class="control" style="width:50%;">
          温度：<span>{{ sensor2.temp }}°</span>
          <!-- <input id="sliderWithValue" disable width="200px" class="slider has-output" min="0" max="100" v-model="temp" step="1" type="range"> -->
          <!-- <progress class="progress is-primary" value="15" max="100">30%</progress> -->

      </div>
      <p class="control">
        湿度: <span>{{ sensor2.hum }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'db-view',
  data: function () {
    return {
      // temp: 30,
      sensor1: {},
      sensor2: {}
    }
  },
  methods: {
    fetech_data () {
      this.$http({
        url: '/api/sensor/1',
        method: 'GET'
      }).then((res) => {
        // let data = res.data
        this.sensor1 = res.data
        // console.log(data)
        this.$http({
          url: '/api/sensor/2',
          method: 'GET'
        }).then((res) => {
          if (res.data.status === true) {
            this.sensor2 = res.data
          }
          // console.log(res.data)
        })
      })
    }
  },
  mounted () {
    this.fetech_data()
    this.tick = setInterval(this.fetech_data, 3000)
  },
  destroyed () {
    if (this.tick) {
      clearInterval(this.tick)
    }
  }
}
</script>

<style scoped lang='scss'>
#dashboard {
}
</style>
