<template>
    <div>
        <hero :title="category.name" :sub-title="subTitle"></hero>
        <div class="container pt-25">
			<div class="columns" v-for="(item, index) in chunkedProducts">
	        	<div class="column is-4" v-for="product in chunkedProducts[index]" :key="product.id">
	        		<div class="card">
					  <div class="card-image">
					    <figure class="image is-4by3">
					      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="media">
					      <div class="media-content">
					        <p class="title is-4">{{ product.title }}</p>
					        <p class="subtitle is-6">{{ product.price }} $</p>
					      </div>
					    </div>

					    <div class="content">
					      {{ product.about }}
					      <br>
					      <time :datetime="product.created_at">{{ product.created_at }}</time>
					    </div>
					  </div>
					  <footer class="card-footer">
					  	 <a v-if="$auth.check()" class="card-footer-item">
					  	 	<b-icon icon="cart"></b-icon>
					  	 </a>
					  </footer>
					</div>
	        	</div>
	        </div>
        </div>
        <booter></booter>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import Booter from '../../layouts/FooterLayout.vue'
import { products } from '../../mixins/products.js'

export default {
    data() {
        return {
            category: {},
            subTitle: 'Discover the products'
        }
    },
    mixins: [products],
    methods: {
    	gatherCategoryDetails(id) {
    		this.$api.get(`/category/${id}`)
    		.then(res => {
    			this.category = res.data.category
    			this.products = res.data.products
    		})
    		.catch(err => console.log(err))
    	},
    },
    components: { Hero, Booter },

    created() {
    	let id = this.$route.params.id
    	this.gatherCategoryDetails(id)
    }
}
</script>

<style></style>
