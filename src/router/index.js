import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header.vue'
import ListDetail from "@/components/list/listDetail.vue";
import city from "@/components/city/city.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/ListDetail/:id',
      name: 'ListDetail',
      component: ListDetail
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
