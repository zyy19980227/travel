<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height 36px
        background $bgColor
        padding 0 10px 0 5px
        .search-input
            box-sizing border-box
            width 100%
            height 30px
            padding 0 5px
            line-height 31px
            text-align center
            border-radius 7px
            color #666
</style>
