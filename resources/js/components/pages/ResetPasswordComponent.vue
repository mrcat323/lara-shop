<template>
    <div>
        <hero title="Reset Password" sub-title="Please type your new password to replace the old one" />

        <div class="container section">
            <b-message v-if="success" has-icon title="Success" type="is-success" aria-close-label="Close message">
                {{ message }}
            </b-message>
            <b-message v-if="error" has-icon title="Error" type="is-danger" aria-close-label="Close message">
                {{ message }}
            </b-message>

            <b-field>
                <b-input type="password"
                         placeholder="Your New Password"
                         v-model="password"
                         password-reveal>
                </b-input>
            </b-field>
            <b-field>
                <b-input type="password"
                         placeholder="Please Confirm Your New Password"
                         v-model="password_confirm"
                         password-reveal>
                </b-input>
            </b-field>
            <b-field>
                <div class="buttons">
                    <b-button v-if="passwordConfirmed" type="is-primary" size="is-medium" @click="resetPassword" outlined>Reset</b-button>
                    <b-button v-else size="is-medium" disabled>Reset</b-button>
                </div>
            </b-field>
        </div>
        <booter></booter>
    </div>
</template>

<script>
import Hero from '../layouts/HeroLayout'
import Booter from '../layouts/FooterLayout.vue'

export default {
    data() {
        return {
            token: '',
            password: '',
            password_confirm: '',
            success: false,
            error: false,
            message: ''
        }
    },
    components: { Hero, Booter },
    computed: {
      passwordConfirmed() {
          return (this.password_confirm === this.password)
      }

    },
    methods: {
        resetPassword() {
            let token = this.token,
                password = this.password

            this.$http.post('/reset/now', { token, password })
                .then(res => {
                    this.message = res.data.msg
                    if (res.data.status === 1) {
                        setTimeout(() => {
                            this.$router.push({ name: 'login' })
                        }, 5000)
                    }

                    return (res.data.status === 1) ? this.success = true : this.error = true
                })
                .catch(err => console.log(err))
        }
    },
    created() {
        this.token = this.$route.params.token
    }
}
</script>

<style scoped>

</style>
