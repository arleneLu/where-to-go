<template>
<div style="overflow: hidden">
  <div class="detail-img">
    <img src="http://img1.qunarzz.com/sight/p0/1610/8f/8f244e6a0ac12325a3.img.jpg_r_800x800_4da59c89.jpg" alt="湘江橘洲之星·长沙印象游轮游" @click="showPreview">
    <p class="detail-word">湘江橘洲之星·长沙印象游轮游</p>
  </div>
  <div class="detail-header" v-show="showHeader" :style="opacityStyle">
      详细信息
  </div>
  <div class="arrow-back" v-show="!showHeader">
    <span class="iconfont icon-fanhui header-back" @click="routeBacktoIndex"></span>
  </div>
  <div class="detail-remark">
    <div class="detail-left">
      <div class="detail-part">
       <span class="score">4.9分 很棒</span>
       <span class="remark">127条评论</span>
      </div>
       <span class="iconfont icon-fanhui header-back arrow"></span>
    </div>
    <div class="detail-left">
      <div class="detail-part">
      <span class="score">4.9分 很棒</span>
      <span class="remark">127条评论</span>
      </div>
      <span class="iconfont icon-fanhui header-back arrow"></span>
    </div>

  </div>
  <list-array :listItem="listItem"></list-array>
  <div class="blank"></div>
  <div class="show-pic" v-show="isPreview" @click="closePreview">
    <div class="show-img">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide >
            <img class="swiper-img" v-for="(item,index) of list" :src="item" :key="index" />
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import "../../../static/css/swiper.css"
  import {
    swiper, swiperSlide
  }

    from "vue-awesome-swiper";
  import listArray from "@/components/list/components/listArray.vue"
  export default{
    components: {
      swiper,
      swiperSlide,
      listArray
    },
    data(){
      return {
        listItem:[
          {"name":"成人票",children:[{"name":"成人1"},{"name":"成人2"}]},
          {"name":"儿童票"},
          {"name":"半价票"}],
        isPreview:false,
        showHeader:false,
        opacityStyle:{
          opacity:0
        },
        list:["http://img1.qunarzz.com/sight/p0/1610/8f/8f244e6a0ac12325a3.img.jpg_r_800x800_4da59c89.jpg",
          "http://img1.qunarzz.com/sight/p0/1610/8f/8f244e6a0ac12325a3.img.jpg_r_800x800_4da59c89.jpg"],
        swiperOption: {
          pagination: '.swiper-pagination',
          notNextTick: true,
          autoplay: true,
          speed: 300,
          loop: true

        }

      }
    },


    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      //this.$on("sroll",this.handleScroll)
    },
    beforeDestory () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      routeBacktoIndex(){
        console.log(11111111);
        this.$router.push("/")
      },
      showPreview(){
        this.isPreview=!this.isPreview;
      },
      closePreview(){
        this.isPreview=!this.isPreview;
      },

      handleScroll(){
        const top = document.documentElement.scrollTop
        console.log(top);
        let opacity=top/140;
        this.opacityStyle={opacity:opacity}
        if(top > 60){

          this.showHeader = true;
        }else{
          this.showHeader = false;
        }
      }
    }
  }
</script>
<style scoped>
  .detail-img{
    height: 0;
    padding-bottom:65%;
    position: relative;
  }
  .arrow-back{
    position: absolute;
    left: 1rem;
    top:1rem;
    background: #000000;
    opacity: .5;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    width: 2rem;
    border-radius: 50%;
  }
  .detail-img img{
    width: 100%;
    height: 16rem;
  }
  .detail-word{
    position: absolute;
    bottom: .2rem;
    left: .2rem;
    color: #fff;
    font-size: 1.5rem;
  }
  .detail-remark{
    display: flex;
    flex-direction: row;
    flex:1;
    padding-top:1rem;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right:1rem;
  }
  .detail-left{
    display: flex;
    flex-direction: row;
    cursor: pointer;


  }
  .detail-part{
    display: flex;
    flex-direction: column;
    width: 10rem;
    overflow: hidden;

  }
  .arrow{
    transform: rotate(180deg);
    color: black;
    margin-right:2rem;
    line-height: 2rem;
  }
  .score{
    color: #ff8300;
    mso-font-src: .6rem;
  }
  .remark{
    font-size: 1rem;
    color: #ccc;
  }
  .show-pic{
    overflow: hidden;
    background: #000000;
    z-index: 99;
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .show-img{
    background: #ffffff;
  }
  .swiper-img{
    width: 100%;
    height: 16rem;

  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 60%;
    background: #eee;
  }
  .blank{
    height: 50rem;
  }
  .detail-header{
    position: fixed;
    height: 2.5rem;
    left: 0;
    top: 0;
    right: 0;
    background: #00bcd4;
    color: white;
    line-height:2.5rem;
    text-align: center;
  }

</style>
