<template>
  <footer>
    <img src="../../assets/logo.png" slt="Medo logo" width="76" />
    <nav>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
    <div class="copyright">
      <p>&copy; 2021, Medo</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  @include flex(row, space-between, center);
  min-height: 132px;
  width: 100%;
  padding: $space3;
  font-size: $text3;
  img {
    margin-right: $space4;
    align-self: flex-start;
    opacity: 0.3;
  }
  nav {
    @include flex(row, flex-start, center, 1);
    margin: 0 $space4;
    ul {
      li {
        padding: $space2 $space3;
      }
      &:first-child {
        border-right: 1px solid $gray150;
      }
    }
  }
  p.copyright {
    align-self: flex-end;
  }
}
</style>
