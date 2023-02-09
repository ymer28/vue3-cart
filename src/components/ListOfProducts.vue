<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <img :src="displayProductsPic(product.thumbnail_url)" alt="product_image">
      <h2 class="product-name"
          @click="seeProductDetail(product)"
      >
        {{ product.label }}
      </h2>
      <div class="product-price">
        <span>{{ convertPrice(product.price) }}</span>
      </div>
      <btn btnColor="btn btn-large btn-purchase"
          :cartIcon="true"
          @click.native="addProductToCart(product)"
      >
        {{ !isMobileView ? $t("cart") : "" }}
      </btn>
    </li>
  </ul>
</template>

<script>
import btn from './layout/Btn.vue';
import productMixin from '../mixins/product'
import cartMixin from '../mixins/cart'

export default {
  props: ['products'],
  components: { btn },
  mixins: [productMixin, cartMixin],
  methods: {
    seeProductDetail(product) {
      this.$router.push({ name: 'Product', params: { productId: product.id } })
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
    text-align: center;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    display: flex;
    text-align: center;
    margin-bottom: .5em;
  }

  img {
    width: 128px;
    height: 128px;
  }

   /* Style for tablets*/ 
  @media (min-width: 40rem) {
    img {
      width: 256px;
      height: 256px;
    }
  }

</style>

