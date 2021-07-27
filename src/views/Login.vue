<template>
  <Layout>
    <template v-slot:head>
      <h1>Login</h1>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit">
        <BaseInput 
          placeholder="Enter email..."
          label="Email"
          v-model="email"
          type="text"
        />
        <BaseInput 
          placeholder="Enter password..."
          label="Password"
          v-model="password"
          type="password"
        />
        <div class="right-alignment">
          <BaseButton>Login</BaseButton>
          <!-- <div>
            <p>Need to sign up?</p>
            <router-link to="/register">Register here.</router-link>
          </div> -->
        </div>
      </form>
    </template>
  </Layout>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log({ email: this.email, password: this.password })
    }
  }
}
</script>

<style lang="scss" scoped>
.right-alignment {
  text-align: right;
  & > div {
    margin-top: $space6;
  }
}
</style>