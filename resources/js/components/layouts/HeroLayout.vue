<template>
    <div>
        <section class="hero is-primary is-large is-bold">
            <div class="hero-head">
                <navbar></navbar>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{ title }}
                    </h1>
                    <h2 class="subtitle">
                        {{ subTitle }}
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from './NavbarLayout.vue'

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        }
    },

    components: { Navbar }
}
</script>

<style></style>
