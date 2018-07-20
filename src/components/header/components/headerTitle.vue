
<template>
  <div>
    <div class="header-banner">
      <div class="header-left" >
        <span class="iconfont icon-fanhui header-back"> </span>
      </div>
      <div  class="header-input">
        <span class='iconfont icon-sousuo header-search'></span>
        <input type="text" placeholder="输入景点，项目">
      </div>
      <div class="header-right">
        <router-link to="/city">
          <span class="header-city">{{this.currentCity}}</span>
        </router-link>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
export default {
  name: 'HeaderTitle',
  computed:{
    ...mapState({
      currentCity:"city"
    })
  }


}
</script>

<style scoped lang="stylus">
 @import "../../../../static/css/varibles.styl"

   .header-banner
      display: flex
      height: 2.2rem
      background: #00bcd4
      justify-content:center
      align-items:center
    .header-left
      width :2rem
      text-align :center
      header-back:$color
    .header-input
      flex:1
      height :1.6rem
      padding: 0.2rem
      box-sizing :border-box
      border-radius :0.2rem
      vertical-align :center
      background: #fff
      .header-search
        color :#ccc
    .header-right
      min-width :4rem
      padding:0 .2rem 0 .2rem
      align-items:center
      text-align :center
      .header-city
        color :$color
        text-decoration :none
</style>
