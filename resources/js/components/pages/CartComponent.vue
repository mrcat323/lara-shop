<template>
    <div>
        <hero :title="title" :sub-title="moreInfo"></hero>
        <div class="container">
            <b-table
                :data="isEmpty ? [] : products"
                striped="true"
                hoverable="true">

                <template slot-scope="props" v-if="!isEmpty">
                    <b-table-column field="id" label="Product ID" width="40" numeric>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="title" label="Name">
                        {{ props.row.title }}
                    </b-table-column>


                    <b-table-column field="date" label="Date" centered>
                        <span class="tag is-success">
                        {{ new Date(props.row.product.created_at).toLocaleDateString() }}
                    </span>
                    </b-table-column>

                    <b-table-column field="price" label="Price">
                        {{ props.row.price }}
                    </b-table-column>

                    <b-table-column field="product.quantity" label="Q-TY">
                        {{ props.row.product.quantity }}
                    </b-table-column>
                    <b-table-column label="">
                       <delete-component :id="props.row.id" @delete-by-id="removeItemFromCart" />
                    </b-table-column>
                </template>

                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Nothing here.</p>
                        </div>
                    </section>
                </template>
            </b-table>
        </div>
        <div class="container" v-if="!isEmpty">
            <h2>Total {{  total }}$</h2>
            <button class="button is-danger" @click="emptyCart">
                <b-icon icon="delete" size="is-large"></b-icon>
            </button>
        </div>
    </div>
</template>

<script>
import Hero from '../layouts/HeroLayout.vue'
import DeleteComponent from "../DeleteComponent";

export default {
    data() {
        return {
            title: 'Cart',
            moreInfo: 'Discover your items!',
            products: [],
            isEmpty: false
        }
    },
    computed: {
        total() {
            var total = 0
            if (this.products.length) {
                for (var i = 0; i < this.products.length; i++) {
                    total += parseInt(this.products[i].price) * parseInt(this.products[i].product.quantity)
                }
            }
            return total
        }
    },
    components: {DeleteComponent, Hero },
    methods: {
        receiveCartItems() {
            this.$http.get('/cart/all')
                .then(res => {
                    if (res.data.items.length === 0) {
                        this.isEmpty = true
                    }
                    this.products = res.data.items
                })
                .catch(err => console.log(err))
        },
        removeItemFromCart(id) {
            this.$http.delete(`/cart/${id}`)
                .then(res => {
                    this.products = res.data.items
                    if (this.products.length === 0) {
                        this.isEmpty = true
                    }
                })
                .catch(err => console.log(err))
        },
        emptyCart() {
            const products = this.products
            this.$http.delete('/cart/empty', { products })
                .then(() => {
                    this.receiveCartItems()
                    this.isEmpty = true
                })
                .catch(err => console.log(err))
        }
    },
    created() {
        this.receiveCartItems()
    }
}
</script>

<style></style>
