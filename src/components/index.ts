/*
 * @Author: Littlombie
 * @Date: 2020-02-22 17:26:03
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-02-25 15:59:57
 */
import nav from './nav.vue'

const commonConponents = {
  install: (Vue: any) => {
    Vue.component('Nav', nav)
  },
}

export default commonConponents
