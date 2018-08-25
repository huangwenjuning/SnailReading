<template>
  <div class="tabbar border-top">
    <template v-for="item in tabbarList">
      <router-link tag="div" :to="item.path" :key="item.id" class="tabbar_item">
        <div class='router-link'>
          <i :class="'iconfont' + ' ' + 'icon-' + item.icon"></i>
          <span class="tabbar_text">{{ item.text }}</span>
        </div>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabbarList: []
    }
  },
  methods: {
  },
  computed: {
  },
  created () {
    this.$http.get('/tabbar').then(res => {
      if (res.data) {
        this.tabbarList = res.data.tabbarList
      } else {
        this.tabbarList = []
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
.tabbar
  display: flex
  position fixed
  padding .12rem 0
  bottom 0
  left 0
  right 0
  .tabbar_item
    flex 1
    text-align center
    .router-link
      display flex
      color #b3b3b3
      flex-direction column
      .tabbar_text
        margin-top .1rem
    &.router-link-active
      .router-link
        color #444
</style>
