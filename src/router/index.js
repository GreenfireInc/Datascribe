// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Directories from '../views/Directories.vue'
// import Test from '../views/Test.vue'
// import Settings from '../views/Settings.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/directories',
//     name: 'Directories',
//     component: Directories
//   },
//   {
//     path: '/test',
//     name: 'Test',
//     component: Test
//   },
//   {
//     path: '/settings/:activeTab',
//     name: 'Settings',
//     component: Settings
//   }
// ]

// const router = new VueRouter({
//   // mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import Router from 'vue-router'
import Devices from '@/views/Devices.vue'
import Download from '@/views/Download.vue'
import Verify from '@/views/Verify.vue'
import Gallery from '@/views/Gallery.vue'
import Writing from '@/views/Writing.vue'
import History from '@/views/History.vue'
import PXE from '@/views/PXE.vue'
import Earn from '@/views/Earn.vue'
import Settings from '@/views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Existing routes
    {
      path: '/devices',
      name: 'Devices',
      component: Devices
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/pxe',
      name: 'PXE',
      component: PXE
    },
    {
      path: '/earn',
      name: 'Earn',
      component: Earn
    },
    {
      path: '/settings/:activeTab',
      name: 'Settings',
      component: Settings
    }
    // Add other routes here
  ]
})
