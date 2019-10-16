<template>
    <div class="wrapper">
       <swiper :options="swiperOption">
    <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/p/tts9/1806/52/39318582f0307502.jpg_r_390x260x90_c6d0d7fa.jpg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/a3133d16-a13f-4fc3-b774-0e3d45f00cc7.jpg_r_480x320x90_4b7592ea.jpg'
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/28bc78ad-b548-481a-9c01-91802812b228.jpg_r_480x320x90_067ae8a7.jpg'
      }, {
        id: '0004',
        imgUrl: '//imgs.qunarzz.com/p/tts9/1908/e5/ae14cb05c5d23a02.png_256x144_70694ecd.png'
      }, {
        id: '0005',
        imgUrl: '//imgs.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_256x144_22f0e440.jpg'
      }, {
        id: '0006',
        imgUrl: '//img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_256x160_649a8b35.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        .swiper-img
            width 100%
            height 120px
</style>
