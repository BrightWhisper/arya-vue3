<script lang="ts">
import { defineComponent } from 'vue'

const PropsType = {
  mag: String,
  age: {
    type: Number,
    required: true,
  },
} as const
export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  mounted() {
    this.age
  },
})
</script>

<template>
  <div class="hello">
    {{ age }}
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
