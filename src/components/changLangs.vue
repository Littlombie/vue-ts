<!--
 * @Author: Littlombie
 * @Date: 2020-02-27 15:23:03
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-02-27 17:33:22
 -->
<!-- i18n -->
<template>
  <div>
    <span>{{$t('message.text')}}</span>
    <el-select v-model="selectValue" @change="langChange" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
 
<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class ChangLangs extends Vue {
  private selectValue: string = ''
  private options: object[] = [
    {
      value: 'cn',
      label: '中文',
    },
    {
      value: 'en',
      label: 'English',
    },
  ]
  private created() {
    const that = this
    // console.log(localStorage.lang)
    that.selectValue =
      localStorage.lang === undefined ? 'cn' : localStorage.lang
  }
  // 语言切换
  private langChange(e: any) {
    // console.log(e)
    localStorage.setItem('lang', e)
    this.$i18n.locale = e
  }
}
</script>