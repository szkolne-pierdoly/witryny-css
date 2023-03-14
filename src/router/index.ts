import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index layout',
    component: () => import('@/layouts/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'home page',
        component: () => import('@/pages/HomePage.vue')
      },
      {
        path: 'zad',
        name: 'zadania',
        component: () => import('@/layouts/EmptyLayout.vue'),
        children: [
          {
            path: '1',
            name: '1st task',
            component: () => import('@/layouts/EmptyLayout.vue'),
            children: [
              {path: 't1', name: '1st part of 1st task', component: () => import('@/pages/zadania/z1/Zad1t1Page.vue')}
            ]
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
