import Vue from 'vue'
import Router from 'vue-router'
import CESCorner from '@/components/CESCorner'
import ConfBooking from '@/components/ConfBooking'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CESCorner',
      component: CESCorner
    },
    {
      path: '/ConfBooking/',
      name: 'ConfBooking',
      component: ConfBooking
    }
  ]
})
