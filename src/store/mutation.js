export default {
  changeCity(state,city){
    state.city=city;
    //为防止刷新时信息恢复到原来的，使用localStorage存储
    try{
      localStorage.city=city;
    }catch (e){

    }

  }
}
