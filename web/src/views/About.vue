<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.name}} {{item.age}} {{item.birthday}}</li>
    </ul>
  </div>
</template>
<script>
import { userApi } from '@api'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      userApi.getList().then(data => {
        console.log('log', data)
        this.list = data.data
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>
