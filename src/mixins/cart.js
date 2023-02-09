import { useCartStore } from '../stores/cart'
import productMixin from '../mixins/product'
export default {
	mixins: [productMixin],
	data() {
    return {
      store: useCartStore()
    }
	},

	methods: {
		addProductToCart(product) {
      this.store.$patch((state) => {
        state.cart.push(product)
      });
		},
		getCartProducts() {
      this.cart = this.store.cartProducts;
      return this.cart;
		},
		getTotalPrice(products) {
      let total = 0;
      for (const product of products) {
        total += product.price;
      }
      return this.convertPrice(total);
    }
	},

}