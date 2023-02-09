<template>
  <div class="product-box">
    <div v-if="!isProductEmpty" class="product-image">
      <img :src="displayProductsPic(product.thumbnail_url)" alt="product_pic">
    </div>
    <div v-if="!isProductEmpty" class="product-info">
      <h2 class="product-title">{{ product.label }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <span class="product-price">{{ convertPrice(product.price) }}</span>
      <btn

        btnColor="btn btn-large btn-purchase"
        :cartIcon="true"
        @click.native="addProductToCart(product)"
      >
        {{ !isMobileView ? "Buy now" : "" }}
      </btn>
    </div>
  </div>
</template>

<script>
import btn from '../components/layout/Btn.vue';
import axios from 'axios';
import productMixin from '../mixins/product'
import cartMixin from '../mixins/cart'
export default {
  components: { btn },
  mixins: [productMixin, cartMixin],
  data() {
    return {
      product:{},
    }
  },
  computed: {
    isProductEmpty() {
      return this.product === {};
    }
  },
  methods: {
    async getSpecificProduct() {
			try {
        let apiUrl = "https://test-feed.airweb.workers.dev/products"+ "/" + this.$route.params.productId;
				const { data } = await axios.get(apiUrl);
        // data.price = this.convertPrice(data.price);
				this.product = data;
			} catch (error) {
				console.log("getSpecificProduct - method", error);
			}
		}
  },
  mounted() {
    this.getSpecificProduct();
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<style scoped>
  .product-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-image {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-title {
    font-weight: normal;
  }

  .product-description {
    text-align: center;
  }

  .product-price {
    font-size: 1.5em;
    font-weight: bolder;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .product-box button {
    width: 80px;
    margin: .3em 0;
  }

  img {
    width: 128px;
    height: 128px;
  }

   /* Style for tablets*/
  @media (min-width: 40rem) {
    .product-image {
      width: 300px;
    }

    .product-info {
      width: 400px;
    }

    .product-title {
      font-weight: normal;
    }

    .product-price {
      font-size: 2em;
      font-weight: bolder;
    }

    .product-box button {
      width: 300px;
      margin: .3em 0;
    }
  }
</style>
