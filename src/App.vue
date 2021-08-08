<template>
  <div class="page-wrapper">
    <header>
      <Navigation />
    </header>
    <main class="page">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

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
  font-size: 2rem;
  font-family: Lane, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #a7cdff;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 100;
}
p {
  line-height: 1.5;
  margin-top: $space2;
  margin-bottom: 0;
}
ul {
  list-style: none;
  margin: 0;
}
header {
  width: 100%;
}
#app {
  background: $bg;
  background-attachment: fixed;
  width: 100%;
  max-width: 428px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.16);
  overflow: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
#app::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
#app {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.page-wrapper {
  @include flex(column);
  min-height: 100vh;
}
.page {
  flex-grow: 1;
  width: 100%;
}
</style>
