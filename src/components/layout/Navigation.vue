<template>
  <nav id="nav" role="navigation" aria-label="Main Navigation">
    <img 
      id="logo"
      src="../../assets/logo.png"
      width="82"
      :class="{ menu: menuOpen }"
    />
    <div class="navigation-wrapper" :class="{ open: menuOpen }">
      <ul>
        <li @click="handleToggleMenu">
          <router-link to="/">Login</router-link>
        </li>
        <li @click="handleToggleMenu">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
    <button
      aria-label="Mobile Navigation Button"
      class="burger"
      @click="handleToggleMenu"
      :class="{ open: menuOpen }"
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
  mounted() {
    const navItems = document.querySelectorAll('.navigation-wrapper li')
    navItems.forEach((item, index) => {
      item.classList.add(`slide-in-${index + 1}`)
    })
  },
  methods: {
    handleToggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss" scoped>
nav#nav {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0 10px 0;
  @include flex(row, space-between, center);
  overflow-y: hidden;
  #logo {
    z-index: 100;
    transition: all 1000ms ease;
    &.menu {
      opacity: 0.5;
    }
  }
  .navigation-wrapper {
    display: none;
    opacity: 0;
    backdrop-filter: blur(200px);
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: $blue100;
    z-index: 99;
    transition: all 0.4s ease-out;
    &.open {
      @include flex(row, center, center);
      opacity: 1;
    }
  }
  ul {
    @include flex(column, center, flex-start);
    list-style-type: none;
    li {
      font-size: 4.2rem;
      padding: 20px;
      opacity: 0;
      color: #2c3e50;
      @for $i from 1 through 8 {
        &.slide-in-#{$i} {
          animation: nav-items-enter 500ms ease #{$i / 12}s 1 forwards;
        }
      }
      a {
        text-decoration: none;
        color: inherit;
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
  z-index: 100;
  cursor: pointer;
  .line {
    width: 100%;
    height: 2px;
    border-radius: 20px;
    background: $gray200;
    margin: 12px 0;
    transition: all 0.4s ease-out;
  }
  &.open {
    .line-1 {
      transform: translateY(7px) rotate(45deg);
    }
    .line-2 {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}
@keyframes nav-items-enter {
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0px); opacity: 1; }
}

li {
  @for $i from 1 through 8 {
    &:nth-child(#{$i}) {
      animation: nav-items-enter 500ms ease #{$i / 12}s 1 forwards;
    }
  }
}
</style>
