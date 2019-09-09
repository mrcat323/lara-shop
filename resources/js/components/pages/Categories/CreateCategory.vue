<template>
    <div>
        <hero :title="title" :sub-title="moreInfo"></hero>
        <b-message v-if="message != ''" title="Success" type="is-success" aria-close-label="Close message">
            {{ message }}
        </b-message>
        <div class="container section">
            <div class="box">
                <b-field label="Title"
                    :label-position="labelPosition">
                    <b-input v-model="category.name"></b-input>
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
import axios from 'axios'

export default {
    data() {
        return {
            title: 'Create a category',
            moreInfo: 'Insert a new category to the website!',
            labelPosition: 'inside',
            category: {},
            message: ''
        }
    },

    methods: {
        submit() {
            let self = this
            axios.post('/category/store', {
                name: self.category.name
            }).then(function (res) {
                self.message = res.data.msg
                self.category.name = ''
            }).catch(function (err) {
                self.message = error.response.data.msg
                console.log(err)
            })
        }
    },
    components: { Hero }
}
</script>

<style></style>
