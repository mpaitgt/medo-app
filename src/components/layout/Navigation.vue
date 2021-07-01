<template>
  <nav id="nav">
    <div class="list-wrapper">
      <ul>
        <li class="li-1">
          <router-link to="/">Login</router-link>
        </li>
        <li class="li-2">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
    <!-- :class="{ close: menuOpen }" @click="toggleMenu" for the burger below -->
    <button class="burger">
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
      // any other state values to track
    }
  },
  methods: {
    handleToggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    // any other methods this component needs
  },
}
</script>

<style lang="scss" scoped>
nav#nav {
  padding: 20px 0 10px 0;
  overflow-y: hidden;
  .list-wrapper {
    display: none;
    opacity: 0;
    backdrop-filter: blur(200px);
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: $blue100;
    width: 100%;
    z-index: 99;
    transition: all 0.4s ease-out;
    &.open {
      @include flex(row, center, center);
      opacity: 1;
    }
  }
  ul {
    @include flex(row, space-between, flex-start);
    list-style-type: none;
    li {
      font-size: 4.2rem;
      padding: 20px;
      a {
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: $blue500;
        }
      }
    }
  }
}
button.burger {
  border: none;
  background: none;
  width: 38px;
  height: 40px;
  cursor: pointer;
  margin-left: auto;
  z-index: 100;
  &.close {
    .line-1 {
      transform: translateY(7px) rotate(45deg);
    }
    .line-2 {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}
div.line {
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background: $gray200;
  margin: 12px 0;
  &.line-1,
  &.line-2 {
    transition: all 0.4s ease-out;
  }
}
</style>
