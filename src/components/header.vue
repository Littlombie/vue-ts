<!--
 * @Author: Littlombie
 * @Date: 2020-02-27 16:25:54
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-02-27 16:56:22
 -->
<template>
  <div class="">
    <changLangs></changLangs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import changLangs from './changLangs.vue'
@Component({
  components: {
    changLangs,
  },
})
export default class  extends Vue {}
</script>

<style lang="less" scoped>
</style>