<template>
    <div class="container">
      <b-field horizontal label="Name">
	<b-input placeholder="Your Name" name="name" expanded />
      </b-field>
      <b-field horizontal label="E-Mail">
	<b-input placeholder="Your E-Mail" name="email" type="email" expanded />
      </b-field>
      <b-field horizontal label="Password">
	<b-input placeholder="Your password" name="password" type="password" expanded />
      </b-field>
      <b-field horizontal label="Password confirm">
	<b-input placeholder="Confirm your password" name="password-confirm" type="password" expanded />
      </b-field>
      <b-field horizontal>
	<p class="control">
	  <button class="button is-primary">Register</button>
	</p>
      </b-field>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
