<template>
    <div>
        <div class="title">当季景点推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_256x160_649a8b35.jpg',
        title: '拙政园',
        desc: '庭院错落，花木为胜，天下园林之典范'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1707/33/33c133cf198d092aa3.water.jpg_256x160_4bf46a1c.jpg',
        title: '虎丘',
        desc: '苏东坡说到苏州不游虎丘乃憾事也'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p18/201211/03/db9f2bb27ee40bf893835fbb.jpg_256x160_584a5d70.jpg',
        title: '美龄宫',
        desc: '一幢中国宫殿式大屋顶建筑，富丽堂皇'
      }, {
        id: '0004',
        imgUrl: '//img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_256x160_4c36c351.jpg',
        title: '周庄',
        desc: '古香古色，品美食寻才子觅佳人'
      }, {
        id: '0005',
        imgUrl: '//img1.qunarzz.com/sight/p0/201305/21/11a6f465375344e6c8d65eac.jpg_256x160_b51b82d8.jpg',
        title: '寒山寺',
        desc: '姑苏城外寒山寺，夜半钟声到客船'
      }]
    }
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
                background #ff9300
                padding 0 10px
                border-radius 3px
                color #fff
</style>
