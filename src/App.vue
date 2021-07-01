<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/">Login</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 2.0rem;
  font-family: Lane, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(167, 205, 255);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
  margin-bottom: 2rem;
  margin: 0;
  padding: 0;
}
p {
  line-height: 1.5;
}
ul {
  list-style: none;
  margin: 0;
  li {
  }
}
#app {
  background: $bg;
  background-attachment: fixed;
  width: 428px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.16);
  overflow: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
#app::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
#app {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
