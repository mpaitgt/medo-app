<template>
  <Layout>
    <template v-slot:head>
      <h1>Register</h1>
      <p>Try out our watch list for free today and see what you think.</p>
    </template>
    <template v-slot:content>
      <form @submit.prevent>
        <div v-if="step === 1">
          <BaseInput label="Name" placeholder="Enter your name..." />
          <BaseInput label="Email" placeholder="Enter your email..." />
          <div class="right-alignment">
            <BaseButton @click="incrementStep">Continue</BaseButton>
          </div>
        </div>
        <div v-if="step === 2">
          <BaseInput label="Password" placeholder="Enter your password..." />
          <BaseInput label="Confirm password" placeholder="Confirm password..." />
          <div class="right-alignment">
            <BaseButton @click="decrementStep" variant="secondary">Back</BaseButton>
            <BaseButton>Confirm</BaseButton>
          </div>
        </div>
      </form>
    </template>
  </Layout>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      step: 1,
    }
  },
  components: {},
  methods: {
    incrementStep() {
      if (this.step === 1) {
        this.step = this.step + 1;
      }
    },
    decrementStep() {
      if (this.step === 2) {
        this.step = this.step - 1;
      }
    },
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