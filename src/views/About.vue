
<template>
   <div class="about">
    <h1>This is an about page</h1>
     <span v-text="$t('message.text')"></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class  extends Vue {}
</script>

<style lang="less" scoped>
</style>