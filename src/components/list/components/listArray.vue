<template>
  <div>
     <div class="list-title" v-for="(item,index) of listItem" :key="index">
         <div class="border" ><span class="ticket"></span>{{item.name}}
         </div>
         <div v-if="item.children">
           <list-a :listItem="item.children"></list-a>
         </div>
     </div>
  </div>
</template>
<script>
 export default{
   name:"ListA",
   props:{
     listItem:Array
   }
  }
</script>
<style scoped>
  .list-title .border{
    padding:.3rem;
    border-bottom: .1rem solid #ccc;
  }
  .ticket{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
    background-size: auto auto;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
</style>
