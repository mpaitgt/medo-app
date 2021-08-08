<template>
  <Layout>
    <template v-slot:header>
      <h1>Register</h1>
      <p>Try out our watch list for free today and see what you think.</p>
      <p class="error" v-if="error">{{ error }}</p>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleRegister">
        <div v-if="step === 1">
          <BaseInput
            label="Username"
            placeholder="Enter your name..."
            v-model="username"
            ref="username"
            required
          />
          <BaseInput
            label="Email"
            placeholder="Enter your email..."
            v-model="email"
            ref="email"
            required
          />
        </div>
        <div v-if="step === 2">
          <BaseInput
            label="Password"
            placeholder="Enter your password..."
            v-model="password"
            type="password"
            required
          />
          <BaseInput
            label="Confirm password"
            placeholder="Confirm password..."
            v-model="confirmed_password"
            type="password"
            required
          />
        </div>
        <div class="button-wrapper">
          <BaseButton v-if="step === 1" @click="incrementStep"
            >Continue</BaseButton
          >
          <BaseButton
            v-if="step === 2"
            @click="decrementStep"
            variant="secondary"
            >Back</BaseButton
          >
          <BaseButton v-if="step === 2" type="submit">Confirm</BaseButton>
        </div>
      </form>
    </template>
  </Layout>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      step: 1,
      username: "",
      email: "",
      password: "",
      password_2: "",
      error: "",
    };
  },
  components: {},
  methods: {
    incrementStep() {
      const filled = this.username && this.email;
      if (this.step === 1 && filled) {
        this.step = this.step + 1;
      }
    },
    decrementStep() {
      if (this.step === 2) {
        this.step = this.step - 1;
        this.error = "";
      }
    },
    handleRegister() {
      const filled = this.password && this.confirm_password;
      const matched = this.password === this.confirm_password;
      if (this.step === 2 && filled && matched) {
        this.step = this.step - 1;
        this.error = "";
        // perform form submission
      } else if (!matched) {
        this.error = "Passwords must match.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: right;
  & > div {
    margin-top: $space6;
  }
}
.error {
  display: inline-block;
  border-radius: 12px;
  color: darken($red200, 20%);
  border: 1px solid darken($red200, 20%);
  background: $red100;
  padding: $space1 $space3;
}
</style>
