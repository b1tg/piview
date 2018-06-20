<template>
  <div id="control-view">
    <div class="container">
      <h1 class="title"># 风扇</h1>
      <div class="field is-grouped">
        <p class="control">
           <button class="button">on/off</button>
        </p>
        <p class="control">
           <button class="button">up</button>
        </p>
        <p class="control">
           <button class="button">down</button>
        </p>
        <p class="control">
           <button class="button">摇头</button>
        </p>
      </div>
      <div class="field">
        <input class="slider is-fullwidth" step="1" min="0" max="100" value="50" type="range">
      </div>

      <h1 class="title"># 空调</h1>
      <div class="field is-grouped">
        <p class="control">
           <button class="button">on/off</button>
        </p>
        <p class="control">
           <button class="button">up</button>
        </p>
        <p class="control">
           <button class="button">down</button>
        </p>
        <p class="control">
          <input id="sliderWithValue" class="slider has-output is-fullwidth" min="0" max="100" value="50" step="1" type="range">
          <output for="sliderWithValue">50</output>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'control-view'
}
</script>

<style scoped lang='scss'>
#control-view {
}
</style>
