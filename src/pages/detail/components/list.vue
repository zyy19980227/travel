<template>
    <div>
      <div class="item" v-for="(item, index) of list" :key="index">
        <div class="item-title">
          <div class="iconfont item-title-icon">&#xe607;</div>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
          <detail-list :list='item.children'></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    display inline-block
    width 18px
    height 18px
    margin-right 5px
    color blue
  .item-title
    line-height 40px
    font-size 16px
    padding 0 10px
    border-bottom 1px solid #ccc
  .item-children
    padding 0 15px
</style>
