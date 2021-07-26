<template>
  <label class="input-wrapper">
    {{ label }}
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['modelValue', 'label', 'placeholder', 'type'],
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: block;
  margin-bottom: $space6;
  font-size: 2.4rem;
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 2rem;
    padding: 10px 16px;
    border: none;
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.16);
    border-radius: 20px;
    font-family: inherit;
    letter-spacing: 1px;
    margin-top: 4px;
    outline: none;
    border: 1px solid $gray100;
    &:focus {
      background-color: $blue100;
      border-color: $blue400;
    }
    &::placeholder {
      font-weight: 600;
      color: $gray400;
    }
  }
}
</style>