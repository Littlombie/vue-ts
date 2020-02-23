/*
 * @Author: Littlombie
 * @Date: 2020-02-22 17:26:03
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-02-22 17:50:50
 */
import nav from './nav.vue'

const commonConponents = {
  install: (Vue: any) => {
    Vue.component('nav', nav)
  },
}

export default commonConponents
