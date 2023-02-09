<template>
  <div class="select-box-container">
    <select
			class="select-box-category"
			v-model="selected" 
			@change="getSpecificCategoryProduct()"
		>
			<option v-for="(option, index) in options" :key="index" :value="option.value">
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
			options: [
        { text: 'All', value: '0' },
        { text: 'Single Use Ticket', value: '1' },
        { text: 'Single Use Ticket and Parking', value: '2' },
        { text: 'Plan', value: '3' }
      ]
		}
	},
	methods: {
		getSpecificCategoryProduct() {
			this.$emit('setFilterValue', this.selected);
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