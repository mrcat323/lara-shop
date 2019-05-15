<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          Lara-Shop
        </router-link>
	
        <router-link
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </router-link>
      </div>
      
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link
            :to="element.path"
            class="navbar-item"
            v-for="element in elements"
            :key="element.id"
            >
            {{ element.name }}
          </router-link>
        </div>
	
        <div class="navbar-end">
	  <b-dropdown v-if="$auth.check()" position="is-bottom-left" aria-role="menu">
	    <a  
              class="navbar-item"
              slot="trigger"
              role="button">
              <span>{{ $auth.user().name }}</span>
              <b-icon icon="menu-down"></b-icon>
	    </a>
	    
	    <b-dropdown-item aria-role="menu-item">
              <router-link :to="{ name: 'cart' }">Cart <b-icon icon="cart-outline" /></router-link>
	    </b-dropdown-item>
	    <b-dropdown-item aria-role="menu-item">
	      <a @click="$auth.logout()">Logout</a>
	    </b-dropdown-item>
          </b-dropdown>
          <div v-else class="navbar-item">
            <div class="buttons">
              <router-link
                to="/register"
                class="button is-primary"
                >
                <strong>Sign up</strong>
              </router-link>
              <router-link
                to="/login"
                class="button is-light"
                >
                Log in
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            elements: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About',
                    path: '/about'
                },
                {
                    name: 'Categories',
                    path: '/categories/index'
                },
                {
                    name: 'Products',
                    path: '/products/index'
                }
            ]
        }
    }
}
</script>

<style></style>
