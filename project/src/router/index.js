import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "@/views/NotFound";
import Category from "@/views/Products/Category";
import Detail from "@/views/Products/Detail";
import Login from "@/views/User/Login";
import Register from "@/views/User/Register";
import Cart from "@/views/Cart/Cart";
import Payment from "@/views/Cart/Payment";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props:true
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
