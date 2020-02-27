<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './views/Home.vue'
import Nav from '@/components/nav.vue'
import Header from '@/components/header.vue'

@Component({
  components: {
    Home,
    Nav,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import './assets/less/app.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
