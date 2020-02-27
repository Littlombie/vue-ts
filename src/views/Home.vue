<template>
  <div class="home"> 
    <!-- <demoTs></demoTs> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
// import Nav from '@/components/nav.vue';
import demoTs from '../components/demo-ts.vue'
import HelloWorld from '../components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
    demoTs,
  },
})

export default class Home extends Vue {

}
</script>
