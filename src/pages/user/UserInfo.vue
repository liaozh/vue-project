<template>
  <div>
      用户个人中心
      <zh-button>自定义按钮</zh-button>
      <anchored-heading>
       aaaa
      </anchored-heading>
    </div>
</template>
<script>
import anchoredHeading from '../../components/layout/Render'
export default {
  name: 'userInfo',
  components: {anchoredHeading},
  data () {
    return {
      a: 1
    }
  }
}
</script>
