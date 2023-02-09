<template>
	<div>
		<product-select-box @set-filter-value="getAirwebItems"></product-select-box>
		<list-of-products :products=getAllProducts></list-of-products>
	</div>
</template>
<script>
import axios from 'axios';
import ListOfProducts from '../components/ListOfProducts.vue';
import ProductSelectBox from '../components/ProductSelectBox.vue'
import productMixin from '../mixins/product'
export default {
	mixins: [productMixin],
  components: { ListOfProducts, ProductSelectBox },
	data() {
		return {
			products: [],
			selectedCategory: '0'
		}
	},
	methods: {
		async getAirwebItems(selectedCategory) {
			try {
				const { data } = await axios.get("https://test-feed.airweb.workers.dev/products");
				if (!data) {
					return console.log("No data received from airweb API");
				}
				this.products = data;
				this.selectCategoryAction(selectedCategory);
			} catch (error) {
				console.log("getAllItems - method", error);
			}
		},
		selectCategoryAction(selectedCategory) {
			if (!selectedCategory) {
					return this.products;
				}
			if (selectedCategory == 0) {
				this.selectedCategory = selectedCategory;
				return this.products;
			}
			if (selectedCategory != 0) {
				this.getSpecificCategoryProducts(selectedCategory);
				this.selectedCategory = selectedCategory;
				return this.products;
			}
		},
		getSpecificCategoryProducts(selectedCategory) {
			let selectedCategoryProducts = [];
			selectedCategoryProducts = this.products.filter((product) => {
				return product.category_id == selectedCategory
			});
			this.products = selectedCategoryProducts;
			return this.products;
		}
	},
	computed: {
		getAllProducts() {
			return this.products;
		}
	},
	mounted() {
		this.getAirwebItems();
	}
}
</script>
