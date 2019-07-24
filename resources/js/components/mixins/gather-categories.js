export const gatherCategories = {
	data() {
		return {
			categories: []
		}
	},
	methods: {
		gatherCategories() {
			let self = this 
			this.$api.get('/category/all').then(function (res) {
				self.categories = res.data.categories
			}).catch(function (err) {
				console.log(err)
			})
		}
	},

	created() {
		this.gatherCategories()
	}
}