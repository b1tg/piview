<template>
  <div id="dashboard">
    <div class="container">
      <h1 class="title">一氧化碳传感器</h1>
      <div v-if="sensor1" class="notification is-danger" style="width:50%;">
      一氧化碳过量!😱
      </div>
      <div v-else class="notification is-primary" style="width:50%;">
      浓度正常
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <h1 class="title">温湿度传感器</h1>
      <div class="control" style="width:50%;">
          温度:  <span>{{ sensor2[1] }}°</span>
          <!-- <input id="sliderWithValue" disable width="200px" class="slider has-output" min="0" max="100" v-model="temp" step="1" type="range"> -->
          <!-- <progress class="progress is-primary" value="15" max="100">30%</progress> -->

      </div>
      <p class="control">
        湿度:  <span>{{ sensor2[0] }} %RH</span>
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
      sensor1: 0,
      sensor2: [25, 30]
    }
  },
  methods: {
    fetech_data () {
      this.$http({
        url: '/api/sensors',
        method: 'GET'
      }).then((res) => {
        // let data = res.data
        this.sensor1 = res.data.sensor1
        this.sensor2 = res.data.sensor2
        // console.log(res.data)
        // this.$http({
        //   url: '/api/sensor/2',
        //   method: 'GET'
        // }).then((res) => {
        //   if (res.data.status === true) {
        //     this.sensor2 = res.data
        //   }
        // })
      }).catch(err => {
        this.$notify.error({
          title: '连接服务器失败',
          message: '请查看服务器状态'
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
