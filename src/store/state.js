let defaultCity="上海"
try {
  if(localStorage.city){
    defaultCity=ocalStorage.city
  }
}catch(e) {}


export default {
  city:defaultCity
}
