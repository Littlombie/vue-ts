<template>
  <div class="nav-list">
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import '@/lib/nav.json';
@Component({
  components: {},
})
export default class Nav extends Vue {}
</script>

<style lang="scss" scoped>
</style>