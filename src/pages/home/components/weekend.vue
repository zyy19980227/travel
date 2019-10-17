<template>
    <div>
        <div class="title">旅行攻略</div>
        <ul class="ul">
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <p class="item-desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6ff48e0e00432f823bf593deec6d3397.jpg',
        desc: '美帝的美，留在图里也要藏在心底'
      }, {
        id: '0002',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/729fced755d522ccfc280ef155f45518.jpg',
        desc: '在秘密花园，领略意大利风情'
      }, {
        id: '0003',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg',
        desc: '带着相机去旅行，圆一场青海梦'
      }, {
        id: '0004',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/24d074328b5a26845ebb92be20b38754.jpg',
        desc: '陪你去三亚，陪你去天涯海角'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .ul
        display flex
        flex-wrap wrap
    .title
        margin-top 4px
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
