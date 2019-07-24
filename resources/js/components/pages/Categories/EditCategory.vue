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
                <b-field label="Title"
                    :label-position="labelPosition">
                    <b-input v-model="category.name"></b-input>
                </b-field>
                <b-field>
                    <div class="control">
                        <button @click="submit" class="button is-info is-medium">Update</button>
                    </div>
                    <delete :id="category.id" @delete-by-id="deleteCategory"></delete>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import Delete from '../../DeleteComponent.vue'

export default {
    data() {
        return {
            title: 'Edit a category',
            moreInfo: 'Insert a new category to the website!',
            labelPosition: 'inside',
            category: {},
            deleteStatus: false,
            message: ''
        }
    },

    methods: {
        submit() {
            this.$api.post('/category/update', {
                id: this.category.id,
                name: this.category.name
            })
            .then(res => this.message = res.data.msg)
            .catch(err => console.log(err))
        },

        gatherCategoryDetails(id) {
            this.$api.get(`/category/${id}`)
            .then(res => this.category = res.data.category)
            .catch(err => console.log(err))
        },

        deleteCategory(id) {
            this.$api.post('/category/destroy', { id })
            .then(res => {
                this.deleteStatus = true 
                this.message = res.data.msg 
            })
            .catch(err => console.log(err))
            // console.log(id)
        }
    },
    components: { Hero, Delete },

    created() {
        let id = this.$route.params.id 
        this.gatherCategoryDetails(id)
    }
}
</script>

<style></style>
