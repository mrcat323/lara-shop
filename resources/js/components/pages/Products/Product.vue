<template>
    <div>
        <hero :title="product.title" sub-title=""></hero>
        <div class="container pt-25">
            <section class="section">
                <div class="content">
                    {{ product.about }}
                </div>
            </section>
        </div>
        <booter></booter>
    </div>
</template>

<script>
import Hero from '../../layouts/HeroLayout.vue'
import Booter from '../../layouts/FooterLayout.vue'

export default {
    data() {
        return {
            product: {},
        }
    },
    methods: {
        gatherProductDetails(id) {
            this.$api.get(`/product/${id}`)
                .then(res => {
                    this.product = res.data.product
                })
                .catch(() => this.$router.push({ name: '404-page' }))
        },
    },
    components: { Hero, Booter },
    created() {
        let id = this.$route.params.id
        this.gatherProductDetails(id)
    }
}
</script>

<style scoped>

</style>
