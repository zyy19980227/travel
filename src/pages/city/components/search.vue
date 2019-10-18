<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id" @click='handleCityClick(item.name)'>{{item.name}}</li>
                <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
    .search-content
        background #eee
        z-index 1
        overflow hidden
        position absolute
        top 79px
        left 0
        right 0
        bottom 0
        .search-item
            border-bottom 1px solid #ccc
            line-height 31px
            padding-left 10px
            background #fff
            color #666
</style>
