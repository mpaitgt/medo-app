<template>
  <nav id="nav">
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
    <button class="burger" @click="handleToggleMenu" :class="{ close: menuOpen }">
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
nav#nav {
  @include flex(row, space-between, center);
  padding: 20px 20px 10px 20px;
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
    @include flex(column, space-between, flex-start);
    list-style-type: none;
    li {
      font-size: 4.2rem;
      padding: 20px;
      opacity: 0;
      @for $i from 1 through 3 {
        &.li-#{$i} {
          animation: nav-items-enter 500ms ease #{$i / 12}s 1 forwards;
        }
      }
      a {
        text-decoration: none;
        font-weight: bold;
        font-weight: 100;
        color: #aeaeae;
        &.router-link-exact-active {
          color: $blue300;
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
@keyframes nav-items-enter {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
