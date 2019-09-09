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
            title: "About",
            moreInfo: 'This is about page for you!'
        }
    },
    computed: {
        lorem() {
            if (moreInfo == 'good') {
                return false;
            }
        }
    },
    components: { Hero }
}
</script>

<style></style>
