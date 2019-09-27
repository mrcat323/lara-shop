<template>
    <div>
        <hero title="Forgot Password" sub-title="Please write down your E-Mail to reset your password" />
        <div class="container section">
            <b-message v-if="success" has-icon title="Success" type="is-success" aria-close-label="Close message">
                {{ message }}
            </b-message>
            <b-message v-if="error" has-icon title="Error" type="is-danger" aria-close-label="Close message">
                {{ message }}
            </b-message>
            <b-field horizontal>
                <b-input placeholder="Your Email Please..." v-model="email" type="email" icon="email" />
            </b-field>
            <b-field horizontal>
                <button class="button is-primary" @click="sendRequest">Send</button>
            </b-field>
        </div>
    </div>
</template>

<script>
import Hero from '../layouts/HeroLayout.vue'

export default {
    data() {
        return {
            email: '',
            error: false,
            success: false,
            message: ''
        }
    },
    components: { Hero },
    methods: {
        sendRequest() {
            let email = this.email
            this.$http.post('/reset/request', { email })
                .then(res => {
                    if (res.data.status === 0) {
                        this.error = true
                        this.message = res.data.msg
                    } else {
                        this.success = true
                        this.message = res.data.msg
                    }
                })
                .catch(err => console.log(err))
        }
    }
}
</script>
