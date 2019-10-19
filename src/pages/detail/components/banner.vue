<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img
        class="banner-img"
        src="https://imgs.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_710x360_4621c512.jpg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">拙政园5A景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span>
          3
        </div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show="showGallary" @close='handleGallaryClose'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'detailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/sight/p0/201405/27/62b6c624ceda06cc786a870769bf8ddc.jpg_990x390_a3b5da1b.jpg', 'https://imgs.qunarzz.com/sight/p0/201305/21/63767a6ddf5dbd36c8d65eac.jpg_990x390_973fe4bd.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 51%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 30px;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 16px;
      padding: 0 10px;
    }

    .banner-number {
      height: 16px;
      line-height: 16px;
      margin-top: 8px;
      padding: 0 20px;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.8);
      font-size: 12px;

      .banner-icon {
        font-size: 12px;
      }
    }
  }
}
</style>
