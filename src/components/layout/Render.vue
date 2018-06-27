<script>
import Vue from 'vue'
const anchoredHeading = Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h2', // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  }
})

export default anchoredHeading
</script>
