<template>
  <div class="tabbar border-top">
    <template v-for="item in tabbarList">
      <div :class="[ selectedClass ]"
        @click="handleClick(item.id)"
        :checked = checked[item.id]
        :key="item.id">
        <i :class="'iconfont' + ' ' + 'icon-' +item.icon"></i>
        <span class="tabbar_text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabbarList: [],
      checked: ['isChecked']
    }
  },
  methods: {
    handleClick (index) {
      console.log(index)
    }
  },
  computed: {
    selectedClass () {
      let classes = 'tabbar_item' + ' '
      return classes
    }
  },
  created () {
    this.$http.get('/tabbar').then(res => {
      console.log(res, 'res')
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
    text-align center
    display flex
    flex: 1
    flex-direction column
    color #b3b3b3

    .isSelected
      color #444

    .iconfont
      margin-bottom .1rem
      font-size .36rem

    .tabbar_text
      font-size .2rem
      line-height .2rem
  .isSlected
    color red
</style>
