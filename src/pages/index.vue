<template>
  <div>
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from '../components/TabBar'
export default {
  name: 'Index',
  components: {
    TabBar
  }
}
</script>
