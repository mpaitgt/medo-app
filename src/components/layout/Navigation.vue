<template>
  <nav id="nav" role="navigation" aria-label="Main Navigation">
    <div class="list-wrapper" :class="{ open: menuOpen }">
      <ul>
        <li class="li-1">
          <router-link to="/">Login</router-link>
        </li>
        <li class="li-2">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
    <button
      aria-label="Mobile Navigation Button" 
      class="burger" 
      @click="handleToggleMenu" 
      :class="{ close: menuOpen }"
    >
      <div class="line line-1"></div>
      <div class="line line-2"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    handleToggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
