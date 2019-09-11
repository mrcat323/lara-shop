<template>
    <div>
        <hero :title="title" :sub-title="moreInfo"></hero>
        <b-message v-if="message != ''" title="Success" type="is-success" aria-close-label="Close message">
            {{ message }}
        </b-message>
        <div class="container section">
            <div class="box">
                <b-field label="Category">
                    <b-select v-model="product.categoryId">
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
                        <button @click="submit" class="button is-primary is-medium">Create</button>
                    </div>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import { gatherCategories } from '../../mixins/gather-categories.js'

export default {
    data() {
        return {
            title: 'Create a product',
            moreInfo: 'Insert a new product to the website!',
            labelPosition: 'inside',
            product: {},
            message: ''
        }
    },
    mixins: [gatherCategories],

    methods: {
        submit() {
            let self = this
            this.$http.post('/product', {
                categoryId: self.product.categoryId,
                title: self.product.title,
                about: self.product.about,
                price: self.product.price
            }).then(function (res) {
                self.message = res.data.msg
                self.product.title = ''
                self.product.about = ''
                self.product.price = ''
            }).catch(function (err) {
                self.message = error.response.data.msg
                console.log(err)
            })
        },
    },
    components: { Hero }
}
</script>

<style></style>
