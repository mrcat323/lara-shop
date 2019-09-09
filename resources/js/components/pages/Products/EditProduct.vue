<template>
    <div>
        <hero :title="title" :sub-title="moreInfo"></hero>
        <b-message v-if="message != '' && !deleteStatus" title="Success" type="is-success" aria-close-label="Close message">
            {{ message }}
        </b-message>
        <b-message v-if="deleteStatus" title="Success" type="is-danger" aria-close-label="Close message">
            {{ message }}
        </b-message>
        <div class="container section" v-if="!deleteStatus">
            <div class="box">
                <b-field label="Category">
                    <b-select v-model="product.category_id">
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </b-select>
                </b-field>
                <b-field label="Title"
                    :label-position="labelPosition">
                    <b-input v-model="product.title"></b-input>
                </b-field>
                <b-field label="About"
                    :label-position="labelPosition">
                    <b-input v-model="product.about" type="textarea"></b-input>
                </b-field>
                <b-field label="Price"
                    :label-position="labelPosition">
                    <b-input v-model="product.price"></b-input>
                </b-field>
                <b-field>
                    <div class="control">
                        <button @click="submit" class="button is-info is-medium">Update</button>
                    </div>
                    <delete :id="product.id" :delete-by-id="deleteProduct"></delete>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import Delete from '../../DeleteComponent.vue'
import { gatherCategories } from '../../mixins/gather-categories.js'

export default {
    data() {
        return {
            title: 'Update a product',
            moreInfo: 'Update the product!',
            labelPosition: 'inside',
            product: {},
            message: '',
            deleteStatus: false
        }
    },

    mixins: [gatherCategories],

    methods: {
        submit() {
            let self = this
            this.$api.post('/product/update', {
                id: self.product.id,
                categoryId: self.product.category_id,
                title: self.product.title,
                about: self.product.about,
                price: self.product.price
            }).then(function (res) {
                self.message = res.data.msg
            }).catch(function (err) {
                self.message = error.response.data.msg
                console.log(err)
            })
        },

        gatherProductDetails(id) {
            let self = this
            this.$api.get(`/product/${id}`).then(function (res) {
                self.product = res.data.product
            }).catch(function (err) {
                console.log(err)
            })
        },

        deleteProduct(id) {
            let self = this
            this.$api.post('/product/destroy', { id }).then(res => {
                self.deleteStatus = true
                self.message = res.data.msg
            }).catch(res => console.log(err))
        }
    },
    components: { Hero, Delete },
    created() {
        let id = this.$route.params.id 
        this.gatherProductDetails(this.$route.params.id)
    }
}
</script>

<style></style>
