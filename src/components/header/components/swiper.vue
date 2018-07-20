<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in list" :key="index" >
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import "../../../../static/css/swiper.css"
  import {
    swiper, swiperSlide
  }
    from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: 'SwiperHeader',
    data () {
      return {
        list:["http://img1.qunarzz.com/piao/fusion/1806/de/df09fa61aed2d502.jpg_750x200_67472739.jpg",
          "http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg"],
        swiperOption: {
          pagination: '.swiper-pagination',
          notNextTick: true,
          autoplay: true,
          speed: 300,
          loop: true

        }
      }
     }
    }

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ccc
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.25%
    background: #eee
    .swiper-img
      width: 100%

</style>













