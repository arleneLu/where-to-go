<template>
  <div>
    <div class="wrapper">
      <swiper :option="swiperOption1">
        <swiper-slide v-for="(currentPage,currentIndex) of pages" :key="currentIndex" >
        <div class="header-direct" v-for="item of currentPage" :key="item.id">
          <div class="header-part" >
            <img class="header-partimg" :src="item.imgUrl" alt="景点门票">
          </div>
          <p>{{item.desc}}</p>
        </div>
        </swiper-slide>
        <<div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>
<script>
  import {
    swiper, swiperSlide
  }
    from "vue-awesome-swiper";
  export default{
    components: {
      swiper,
      swiperSlide
    },
   data(){
     return {
       swiperOption1: {
         notNextTick: true,
         pagination: '.swiper-pagination',
         autoplay: true,
         speed: 300,
         loop: true
       },
       list:[
         {
         "id": "0001",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
         "desc": "景点门票"
       }, {
         "id": "0002",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
         "desc": "滑雪季"
       }, {
         "id": "0003",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
         "desc": "泡温泉"
       }, {
         "id": "0004",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
         "desc": "动植园"
       }, {
         "id": "0005",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
         "desc": "游乐园"
       }, {
         "id": "0006",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
         "desc": "必游榜单"
       }, {
         "id": "0007",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
         "desc": "演出"
       }, {
         "id": "0008",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
         "desc": "城市观光"
       }, {
         "id": "0009",
         "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
         "desc": "一日游"
       }]
     }
   },
    computed:{
     pages(){
       const pages=[];
       this.list.forEach((item,index)=>{
         const page=Math.floor(index/8);
         if(!pages[page]){
           pages[page]=[];
         }
         pages[page].push(item);
       })
       return pages;
     }
    }
 }
</script>
<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ccc
 .header-direct {
   width :25%
   height :0
   overflow :hidden
   padding-bottom: 22%
   float :left
   text-align :center
   margin-top:1rem;
 }
   .header-partimg {
      width: 4rem
       height: 4rem
   }

</style>
