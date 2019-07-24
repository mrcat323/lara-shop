<template>
	<div>
		 <button class="button is-danger" @click="emit">
            <b-icon icon="delete" size="is-medium"></b-icon>
        </button>
	</div>
</template>
<script>
export default {
	props: ['id'],
	methods: {
		emit() {
			this.$emit('delete-by-id', this.id)
		}
	}
}
</script>
<style></style>