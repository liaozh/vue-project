// import Button from './src/button.vue'
// Button.install = function (Vue) {
//   Vue.component(Button.name, Button)
// }
// export default Button

import Vue from 'vue'
// import Store from 'public/store'

const zhButton = Vue.component('zh-button', {
  functional: true,
  render (h, self) {
    // console.log(self)
    // const { attrs } = self.data
    // if (attrs && self.props.auth) {
    //   attrs.disabled = !Store.getters.permission[self.props.auth] || attrs.disabled
    // }
    // if (self.props && self.props.width) {
    //   self.data.style = self.data.style || {}
    //   self.data.style.width = self.props.width + 'px'
    // }
    return h('el-button', self.data, self.children)
  },
  props: {
    auth: String,
    width: String
  }
})

export default zhButton
