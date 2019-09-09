<template>
	<div>
		<hero title="You successfully had verified your account!" sub-title="You will be redirected in a few seconds..."></hero>
	</div>
</template>
<script>
import Hero from '../layouts/HeroLayout.vue'
export default {
	components: { Hero },

	created() {
		setTimeout(() => {
			this.$router.push({ name: 'login' })
		}, 6500)
	}
}
</script>
<style></style>