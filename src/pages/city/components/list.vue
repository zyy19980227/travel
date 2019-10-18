<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"  v-for="item of hotCities" :key="item.id" @click='handleCityClick(item.name)'>
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref='key'>
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click='handleCityClick(innerItem.name)'>{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 79px;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  border-bottom: 1px solid #ccc;
  line-height: 27px;
  background: #eee;
  padding-left: 10px;
  color: #666;
}

.button-list {
  overflow: hidden;
  padding: 5px 30px 5px 5px;

  .button-wrapper {
    width: 33.33%;
    float: left;

    .button {
      text-align: center;
      margin: 5px 5px;
      padding: 3px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}

.item-list {
  line-height: 38px;
  padding-left: 10px;

  .item {
    border-bottom: 1px solid #ccc;
  }
}
</style>
