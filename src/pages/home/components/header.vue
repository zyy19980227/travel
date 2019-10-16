<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe613;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe601;</span>
            输入城市/景点/游玩主题
            </div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe600;</span>
            </div>

    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header
        display flex
        line-height 43px
        background $bgColor
        color #fff
        .header-left
            width 32px
            float left
            .back-icon
                text-align center
                font-size 16px
        .header-input
            flex 1
            height 30px
            margin-top 6px
            line-height 30px
            margin-left 12px
            padding-left 12px
            background #fff
            border-radius 2px
            color #ccc
        .header-right
            width 62px
            float right
            text-align center
            .arrow-icon
                margin-left -4px
                font-size 12px
</style>
