export default {
	data() {
    return {
      isMobileView: true,
    }
	},
	methods: {
		handleView() {
      this.isMobileView = window.innerWidth <= 800;
    },
	},

}