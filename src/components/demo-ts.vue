<template>
  <div class="content">
    <h3>{{msg}}</h3>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Demos  extends Vue {
  private msg = '这是typescript demo'
}
</script>

<style lang="scss" scoped>
</style>