<template>
  <div>
    <div class="list-box">
    <div class="city-header">
      <router-link to="/">
        <span class="iconfont icon-fanhui header-back"> </span>
      </router-link>
       <p>城市选择</p>
    </div>
    <div class="city-headerput">
      <input class="city-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    </div>
    <div class="search-part" v-show="keyword">
      <ul >
        <li class="list-border" v-for="item in list" @click="handleCityList(item.name)">{{item.name}}</li>
      </ul>
    </div>

  </div>
</template>
<script>
  import {mapMutations} from "vuex"
 export default{
   props:{
     cityList:Object
   },
   data(){
     return {
       keyword:"",
       list:[],
       timer:null
     }
   },
   watch:{
     keyword(){
      if(this.timer){
        clearTimeout(this.timer);
      }
        this.timer =setTimeout(()=>{
          const result=[];
          console.log(this.cityList.data.cities);
          for(let i in this.cityList.data.cities){
            this.cityList.data.cities[i].forEach((value)=>{
              if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                result.push(value);

              }
            })
          }
          this.list = result
        },16)

     }
   },
   methods:{
     handleCityList(city){
       //通过dispatch,将事件传递给acitons
      // this.$store.commit("changeCity",city);
       this.changeCity(city)
       this.$router.push("/")
     },
     ...mapMutations(["changeCity"])
   }

 }
</script>
<style scoped lang="stylus">
  @import "../../../../static/css/varibles.styl"
  .list-box{
    position :fixed;
    width:100%;
    z-index:111;
  }
 .city-header{
   height: 2.5rem
   width: 100%
   background:$background
   text-align center;
   vertical-align :center;
   line-height:2.5rem;
   color:$color

 }
   .city-headerput{
     height: 2.5rem
     width: 100%
     background:$background
     text-align center;
     line-height:2rem;
     color:$color
   }
  .header-back{
    float :left;
    padding-left :.5rem
  }
  .city-input{
    width 90%;
    height 2rem
    border-radius .2rem
    text-align :center

  }
  .search-part{
    z-index: 1
    position absolute;
    left:0;
    top:5rem;
    background :#fff;
    overflow :hidden;
    width :100%;
    height 100%
  }
  .list-border{
    border-bottom :.1rem solid #ccc;
    height :2rem;
    line-height :2rem;
    box-sizing :border-box;
    padding-left:1rem;
    overflow :scroll
  }
</style>
