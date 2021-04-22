import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index: 1,
    },
  },
  { 
    path: '/category', 
    name: 'category', 
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'), 
    meta: { 
      index: 1, 
    }, 
  }, 
  { 
    path: '/cart', 
    name: 'cart', 
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'), 
    meta: { 
      index: 1, 
    }, 
  },
  {    
    path: '/user',    
    name: 'user',    
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),    
    meta: {      
      index: 1,    
    },  
  },
   {    
    path: '/login',    
    name: 'login',    
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),    
    meta: {      
      index: 2,    
    },  
  },
  {  
    path: '/detail',  
    name: 'detail',  
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),  
    meta: {    
      index: 2  
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
