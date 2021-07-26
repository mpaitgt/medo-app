<template>
  <Layout>
    <template v-slot:header>
      <h1>Login</h1>
    </template>
    <template v-slot:content>
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
  components: {},
}
</script>
