<template>
  <div class="layout">
    <div class="header-wrapper">
      <slot name="header" />
    </div>
    <section>
      <slot name="content" />
    </section>
    <div class="right-alignment">
      <slot name="foot" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="scss" scoped>
div.layout {
  max-width: 80%;
  margin: 0 auto;
  .header-wrapper {
    margin-top: $space8;
    margin-bottom: $space7;
  }
  .right-alignment {
  text-align: right;
  & > div {
    margin-top: $space6;
  }
}
}
</style>
