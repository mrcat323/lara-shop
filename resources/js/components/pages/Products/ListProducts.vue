<template>
    <div>
        <hero :title="title" :sub-title="subTitle"></hero>
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
					  	<router-link
					  	:to="{ name: 'category',  params: { id: product.category.id }  }"
					  	class="card-footer-item"
					  	>{{ product.category.name }}
					  </router-link>
					  	 <a v-if="$auth.check()" @click="addToCart(product.id)" class="card-footer-item">
					  	 	<b-icon icon="cart"></b-icon>
					  	 </a>
					  </footer>
					</div>
	        	</div>
	        </div>
        </div>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import { products } from '../../mixins/products.js'

export default {
    data() {
        return {
            title: 'All Products',
            subTitle: 'Discover the products'
        }
    },
    mixins: [products],
    methods: {
    	gatherProducts() {
    		this.$api.get('/product/all')
    		.then(res => this.products = res.data.products)
    		.catch(err => console.log(err))
    	},

    	addToCart(id) {
    		this.$http.post('/cart/store', { id })
    		.then(res => {
    			if (res.data.status == 0) {
    				this.$dialog.alert({
	                    title: 'Error',
	                    message: res.data.msg,
	                    confirmText: 'OK'
	                })
    			}
    			console.log(res.data.products)
    		})
    		.catch(err => console.log(err))
    	}
    },
    components: { Hero },

    created() {
    	this.gatherProducts()
    }
}
</script>

<style></style>
