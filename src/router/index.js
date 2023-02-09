import { createRouter, createWebHistory } from 'vue-router';
import AllProducts from '../pages/AllProducts.vue'
import Product from '../pages/Product.vue'
import Cart from '../pages/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: AllProducts, name: "AllProducts" },
    { path: '/product/detail/:productId', component: Product, name: "Product" },
    { path: '/mycart', component: Cart, name: "Cart" },
  ]
})

export default router
