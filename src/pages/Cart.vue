<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <h2>{{ $t("myCart") }}</h2>
      <transition-group name="fade">
      <li v-for="(product, index) in cart" :key="index" class="checkout-product">
        <img :src=displayProductsPic(product.thumbnail_url) alt="" class="product-image">
        <h3 class="product-name">{{ product.label }}</h3>
        <span class="product-price">{{ convertPrice(product.price) }} </span>
        <button class="product-remove" @click="removeProduct(index)">X</button>
      </li>
      <li class="checkout-total">
        <img src="../assets/images/cart.svg" alt="Cart Icon" class="total-image">
        <h3 class="product-name">{{ $t("total") }}</h3>
        <span class="product-price">{{ getTotalPrice(cart) }} </span>
      </li>
      </transition-group>
    </ul>
    <ul class="checkout-action">
      <li class="checkout-btn">
        <btn :btnColor="setButtonClass"
          :disabled = "!store.hasProduct"
          @click.native="purchaseProducts()"
        >
          {{ $t("buy") }}
        </btn>
      </li>
      <li class="checkout-btn">
        <btn btnColor="btn btn-small btn-general"
          @click.native="moveToMainPage()"
        >
          {{ $t("back") }}
        </btn>
      </li>
    </ul> 
  </div>
</template>

<script>
import btn from '../components/layout/Btn.vue';
import productMixin from '../mixins/product'
import cartMixin from '../mixins/cart'
export default {
  components: { btn },
  mixins: [productMixin, cartMixin],
  data() {
    return {
      cart: [],
    }
  },
  methods: {
    purchaseProducts() {
      alert("Not developed");
    },
    moveToMainPage() {
      this.$router.push({name: "AllProducts"});
    },
  },
  computed: {
    setButtonClass() {
      return this.store.hasProduct ? "btn btn-small btn-general" : "btn btn-small btn-disabled"; 
    }
  },
  mounted() {
		this.getCartProducts();
	}
}
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }
  .checkout-total {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color:#DADADA;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-action {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkout-btn {
    margin: 0 0.5rem;
  }

  .checkout-product * {
    place-self: center;
  }
  .checkout-total * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }
  .total-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

</style>
