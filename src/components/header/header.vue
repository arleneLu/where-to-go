<template>
  <div>

    <header-title></header-title>
    <swiper-header ></swiper-header>
    <header-direct></header-direct>
    <hot-view></hot-view>
    </div>
</template>

<script>
 import HeaderTitle from  "@/components/header/components/headerTitle";
 import SwiperHeader from "@/components/header/components/swiper";
 import HeaderDirect from "@/components/header/components/HeaderDirect";
 import HotView from "@/components/header/components/hotView.vue"
 import axios from 'axios'
export default {
 components: {
    HeaderTitle,
   SwiperHeader,
   HeaderDirect,
   HotView
  },
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
   // this.getHomeInfo()
  },
  methods:{
    getHomeInfo (){
      axios.get("/api/city.json").then(
        this.getHomeInfoSucc
      )
    },
    getHomeInfoSucc(res){
        console.log(res);
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
