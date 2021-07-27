<template>
  <button
    :onHover="onHover"
    @click="onClick"
    :cta="cta"
    :variant="variant"
    :class="[{ cta: cta }, handledVariant]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    onHover: {
      type: Function,
      default: () => {},
    },
    cta: { type: String, default: '' },
  },
  computed: {
    handledVariant() {
      switch (this.$props.variant) {
        case "primary":
          return "primary";
        case "secondary":
          return "secondary";
        default:
          return "primary";
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 900;
  padding: 8px 18px;
  border: none;
  cursor: pointer;
  margin: $space4 0;
  transform: skew(-3deg, -3deg);
  &.primary {
    background: $blue500;
    color: $white;
    padding: 8px 24px;
    transform: skew(0deg, 0deg) translateX(0px);
    box-shadow: 0px 0px 1px 0px rgba($blue500, 0);
    animation: primary 500ms ease 0.5s 1 forwards;
  }
  &.secondary {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid $blue200;
    color: $blue500;
    transform: skew(0deg, 0deg) translateX(0px);
    box-shadow: 0px 0px 1px 0px rgba($black, 0);
    animation: secondary 500ms ease 0.5s 1 forwards;
  }
  & + button {
    margin-left: $space6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  &.cta {
    font-size: 3.6rem;
    animation: cta 5s ease-in-out 0.5s infinite forwards;
  }
}
@keyframes cta {
  0% {
    transform: skew(-3deg, -3deg);
    box-shadow: 8px 8px 1px 0px rgba($blue500, 0.5);
  }
  50% {
    transform: skew(3deg, 3deg);
    box-shadow: -8px 8px 1px 0px rgba($blue500, 0.5);
  }
  100% {
    transform: skew(-3deg, -3deg);
    box-shadow: 8px 8px 1px 0px rgba($blue500, 0.5);
  }
}
@keyframes primary {
  0% {
    transform: skew(0deg, 0deg) translateX(0px);
    box-shadow: 0px 0px 1px 0px rgba($blue500, 0);
  }
  100% {
    transform: skew(-3deg, -3deg) translateX(-6px);
    box-shadow: 6px 6px 1px 0px rgba($blue500, 0.5);
  }
}
@keyframes secondary {
  0% {
    transform: skew(0deg, 0deg) translateX(0px);
    box-shadow: 0px 0px 1px 0px rgba($black, 0);
  }
  100% {
    transform: skew(-3deg, -3deg) translateX(-6px);
    box-shadow: 6px 6px 1px 0px rgba($black, 0.1);
  }
}
</style>
