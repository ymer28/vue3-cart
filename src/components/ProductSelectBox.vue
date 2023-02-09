<template>
  <div class="select-box-container">
    <select
			class="select-box-category"
			v-model="selected" 
			@change="getSpecificCategoryProduct()"
		>
			<option v-for="(option, index) in updateOptions" :key="index" :value="option.value">
					{{ option.text }}
			</option>
    </select>
	</div>
</template>

<script>
export default {
	emits: ['set-filter-value'],
	data() {
		return {
			selected: "0",
			options: [],
		}
	},
	methods: {
		getSpecificCategoryProduct() {
			this.$emit('setFilterValue', this.selected);
		}
	},
	computed: {
		updateOptions() {
				this.options = [
				{ text: this.$t("all"), value: '0' },
				{ text: this.$t("singleUseTicket"), value: '1' },
				{ text: this.$t("singleUseTicketMore"), value: '2' },
				{ text: this.$t("pass"), value: '3' }
			];
			return this.options;
		}
	}
}
</script>

<style>
	.select-box-container {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 10px;
	}
	.select-box-category {
		width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
		padding: 0.3em;
    margin: 1em 0;
    border-radius: 7px;
		text-align: center;
	}
</style>