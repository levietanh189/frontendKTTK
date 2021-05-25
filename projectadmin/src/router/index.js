import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "@/views/NotFound";
import Statis from "@/views/admin/Statis";
import Products from "@/views/admin/Products";
import Categories from "@/views/admin/Categories";
import addCategories from "@/views/admin/addCategories";
import CategoriesEdit from "@/views/admin/CategoriesEdit";
import addProducts from "@/views/admin/addProducts";
import ProductsEdit from "@/views/admin/ProductsEdit";
import Login from "@/views/user/Login";
import Register from "@/views/user/Register";
import Suppliers from "@/views/admin/Suppliers";
import SuppliersEdit from "@/views/admin/SuppliersEdit";
import addSuppliers from "@/views/admin/addSuppliers";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/statis',
    name: 'Statis',
    component: Statis
  },{
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/add-products',
    name: 'addProducts',
    component: addProducts
  },{
    path: '/products/:id',
    name: 'ProductsEdit',
      component: ProductsEdit
  },{
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/add-categories',
    name: 'addCategories',
    component: addCategories
  },{
    path: '/categories/:id',
    name: 'CategoriesEdit',
    component: CategoriesEdit
  },
  ,{
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/add-suppliers',
    name: 'addSuppliers',
    component: addSuppliers
  },{
    path: '/suppliers/:id',
    name: 'SuppliersEdit',
    component: SuppliersEdit
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
