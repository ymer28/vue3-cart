import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    hasProduct: (state) => state.cart.length > 0,
    cartProducts: (state) => state.cart,
    cartProductsNumber: (state) => state.cart.length,
  },
})