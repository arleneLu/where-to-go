<template>

  <div class="cityIndex" >
  <span v-for="(item,key) of letters "
        @click="tocurrentList"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
  >{{item}}</span>
  </div>
</template>

<script>
  export default{
    props: {
      cityList: Object

    },
    data (){
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    computed:{
      letters(){
        const letters=[];
        for(let i in this.cityList.data.cities){
          letters.push(i)
        }
        return letters
      }
    },
    methods:{
      tocurrentList:function  (e) {
        var val=e.target.innerText;
     this.$emit("change",val)
      },
      handleTouchStart(){
        this.touchStatus=true;
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            this.startY = this.$refs['A'][0].offsetTop
            console.log(this.startY )
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 30)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }

  }
</script>
<style scoped>
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
