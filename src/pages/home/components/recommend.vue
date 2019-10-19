<template>
    <div>
        <div class="title">当季景点推荐</div>
        <ul>
            <router-link tag="li" class="item" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top 4px
        line-height 40px
        background #eee
        text-indent 1px
    .item
        overflow hidden
        display flex
        height 95px
        border-bottom 1px solid #ccc
        .item-img
            width 120px
            height 85px
            padding 5px
            border-radius 10px
        .item-info
            flex 1
            padding 5px
            min-width 0
            .item-title
                line-height 27px
                font-size 16px
                ellipsis()
            .item-desc
                line-height 20px
                font-size 15px
                color #ccc
                ellipsis()
            .item-button
                line-height 22px
                margin-top 8px
                background #44c767
                padding 0 10px
                border-radius 12px
                color #fff
                border: solid #18ab29 1px
            .item-button:hover
                color: #ffffff
                background: #5cbf2a
</style>
