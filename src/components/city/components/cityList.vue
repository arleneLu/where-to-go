<template>
  <div class="city" ref="wrapper">
     <div>
    <div class="citylist-curr">
      <div class="citylist-title">
       当前城市
      </div>
      <div class="city-detail">
        <div class="city-detailHOT">{{this.city}}</div>
      </div>
    </div>
    <div class="citylist-hot">
      <div class="citylist-title">
        热门城市
      </div>
      <div  v-for="item of cityList.data.hotCities" :key="item.id" @click="handleCityList(item.name)" >
        <div class="city-detail">
          <div class="city-detailHOT" >{{item.name}}</div>
        </div>
    </div>
    </div>
    <div v-for="(item,key) of cityList.data.cities " :key="key" :ref="key">
      <div class="citylist-title">
        {{key}}
      </div>
      <div class="city-ul">
        <ul v-for="list of item">
          <li class="city-listCode" @click="handleCityList(list.name)">{{list.name}}</li>
        </ul>
      </div>
  </div>
    <!--<div class="cityIndex" >-->
      <!--<span v-for="(item,key) of cityList.data.cities " @click="tocurrentList">{{key}}</span>-->
    <!--</div>-->
     </div>

  </div>
</template>
<script>
  import Bscroll from 'better-scroll';
  import {mapState,mapMutations} from "vuex"
  export default{
  props:{
    cityList:Object,
    letter:String
  },
    computed:{
      ...mapState(["city"])
    },
    watch:{
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods:{
      handleCityList(city){
        //通过dispatch,将事件传递给acitons
       // this.$store.commit("changeCity",city);
      this.changeCity(city)
       this.$router.push("/")
      },
      //vuex为了方便，使用mapState和mapMutations进行数据和方法的映射
      ...mapMutations(["changeCity"])
    },
    mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper)
    }

  }

</script>
<style scoped>
  .city{
    position: absolute;
    top: 5.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .citylist-title {
    height: 2rem;
    width: 100%;
    background: #eee;
    padding-left: 1rem;
    line-height: 2rem;
    color: #585454;
    box-sizing: border-box;
  }


  .city-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
  }

  .city-detail {
    /*padding-top:.1rem;*/
    margin-top: .2rem;
    margin-left: .2rem;
  }
.citylist-hot{
  height :6rem;
}
  .citylist-curr{
    height :4rem;
  }
  .city-detailHOT {
    margin: .1rem;
    padding: .1rem 0;
    text-align: center;
    border: .1rem solid #ccc;
    border-radius: .06rem;
    float: left;
    width: 31%;
    overflow: hidden;

  }
  .city-ul{

  }
  .city-listCode{
    border-bottom: .07rem solid #ccc;
    padding-left:1rem;
    padding:.5rem 0rem .5rem 1rem;
    overflow: hidden;
  }
  .cityIndex{
    position: fixed;
    right: .5rem;
    top:15rem;

  }
  .cityIndex span{
    display: flex;
    flex-direction: column;
    color: #007aff;
    text-align: center;
  }
</style>
