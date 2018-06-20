<template>
  <div id="dashboard">
    <div class="container">
      <h1 class="title"># kanban</h1>
      <div class="columns">
        <!-- <div class="column is-3 primary">
          <draggable class="list-group" element="ul" v-model="todo" :options="dragOptions" :move="onMove">
            <transition-group type="transition" :name="'flip-list'">
              <li class="list-group-item" v-for="(element, index) in todo" :key="index">
                {{element.name}}
                <span class="badge">0</span>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="column is-3">
          <draggable element="span" v-model="done" :options="dragOptions" :move="onMove">
              <transition-group name="no" class="list-group" tag="ul">
                <li class="list-group-item" v-for="(element, index) in done" :key="index">
                  {{element.name}}
                  <span class="badge">0</span>
                </li>
              </transition-group>
          </draggable>
        </div> -->
        <div class="column is-4">
<nav class="panel">
  <p class="panel-heading">
    TODO
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" v-model= "newItem" placeholder="add todo" @keyup.enter="add_todo">
      <span class="icon is-small is-left">
        <i class="fas fa-plus" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">全部分类</a>
    <a>today</a>
  </p>

  <draggable element="span" v-model="todo" :options="dragOptions" :move="onMove">
      <li class="panel-block" v-if="todo.length===0">
        placeholder
      </li>
      <transition-group name="no" class="list-group" tag="ul">
        <li class="panel-block" v-for="(element, index) in todo" :key="index">
          {{element.name}}
          <span class="panel-icon" @click="remove_todo(index)">
            <i class="fas fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
  </draggable>
  <!-- <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div> -->
</nav>
        </div>
        <div class="column is-4">
<nav class="panel">
  <p class="panel-heading">
    DONE
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <!-- <input class="input is-small" type="text" placeholder="add todo"> -->
      <!-- <span class="icon is-small is-left">
        <i class="fas fa-plus" aria-hidden="true"></i>
      </span> -->
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">全部分类</a>
    <a>today</a>
  </p>
  <draggable element="span" v-model="done" :options="dragOptions" :move="onMove">
      <transition-group name="no" class="list-group" tag="ul">
        <li class="panel-block" v-for="(element, index) in done" :key="index">
          {{element.name}}
        </li>
      </transition-group>
  </draggable>
</nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'demo-view',
  components: {
    draggable
  },
  data: function () {
    return {
      newItem: '',
      todo: [
        // {'name': 'sfaf'},
        // {'name': 'kjljjl'},
        // {'name': 'sfuouaf'},
        // {'name': 'opuuou'}
      ],
      done: [
        {'name': 'sf'}
      ]
    }
  },
  methods: {
    add_todo () {
      if (this.newItem) {
        this.todo.push({ 'name': this.newItem, 'timestamp': new Date() })
        this.newItem = ''
      }
    },
    remove_todo (index) {
      this.todo.splice(index, 1)
    },
    onMove ({relatedContext, draggedContext}) {
      // const relatedElement = relatedContext.element
      // const draggedElement = draggedContext.element
      console.log('movvvvv')
      return true
      // return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  mounted () {
    // this.fetech_data()
    // this.tick = setInterval(this.fetech_data, 1500)
  },
  destroyed () {
    // if (this.tick) {
    //   clearInterval(this.tick)
    // }
  }
}
</script>

<style scoped lang='scss'>
#demo {
}
</style>
