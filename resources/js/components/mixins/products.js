export const products = {
	data() {
		return {
			products: []
		}
	},

	computed: {
		chunkedProducts() {
			const array = [],
				      n = 3

			for (var i = 0; i < this.products.length; i += n) {
				array.push(this.products.slice(i, i + n))
			}

			return array
		}
	}
}