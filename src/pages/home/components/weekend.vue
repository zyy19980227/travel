<template>
    <div>
        <div class="title">旅行攻略</div>
        <ul class="ul">
            <li class="item" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <p class="item-desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .ul
        display flex
        flex-wrap wrap
    .title
        line-height 40px
        background #eee
        text-indent 1px
    .item
        height 155px
        width 50%
        .item-img
            width 90%
            height 105px
            padding 5px 5px 5px 8px
            border-radius 10px
        .item-desc
            font-size 15px
            margin 0 5px 5px 8px
</style>
