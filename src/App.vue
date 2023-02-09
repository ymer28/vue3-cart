<template>
  <div class="container">
    <the-menu>
      <btn 
        btnColor="btn btn-small btn-cart"
        :cartIcon="true"
        @click="moveToCart()"
      >
        {{ !isMobileView ? $t("cart") : "" }}
        <span class="btn-circle" v-if="store.hasProduct">
           {{ store.cartProductsNumber }}
        </span>
      </btn>
    </the-menu>
    <router-view></router-view>
    <the-footer/>
    
    
  </div>

</template>
<script>
import TheMenu from './components/layout/TheMenu.vue'
import TheFooter from './components/layout/TheFooter.vue'
import btn from './components/layout/Btn.vue'
import cartMixin from './mixins/cart'
export default {
  mixins: [cartMixin],
  components: { 
    TheMenu,
    TheFooter, 
    btn,
  },
  methods: {
    moveToCart() {
      this.$router.push({ name: 'Cart' });
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>
<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  .container {
    width: 100%;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>