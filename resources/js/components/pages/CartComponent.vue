<template>
    <div>
        <hero :title="title" :sub-title="moreInfo"></hero>
    </div>
</template>

<script>
import Hero from '../layouts/HeroLayout.vue'

export default {
    data() {
        return {
            title: 'Cart',
            moreInfo: 'Discover your items!'
        }
    },
    components: { Hero }
}
</script>

<style></style>
