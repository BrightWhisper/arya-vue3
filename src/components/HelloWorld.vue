<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'

const PropsType = {
  mag: String,
  age: {
    type: Number,
    required: true,
  },
}
export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  setup(props, context) {
    const name = ref('joky')
    setInterval(() => {
      name.value = name.value + '1'
    }, 1000)

    const computedName = computed(() => {
      return name.value + 2
    })

    watchEffect(() => {
      console.log('1')
    })
    return {
      name,
      computedName,
    }
  },
})
</script>

<template>
  <div class="hello">
    {{ age }}
    <div>{{ name }}</div>
    <div>{{ computedName }}</div>
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
