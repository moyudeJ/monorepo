<script setup lang="ts">
// import { ref } from 'vue'
import { hello } from '@lionui/shared';

function clickHandler() {
  hello('world');
}

</script>

<template>
  <div>
    <button @click="clickHandler">
      测试
    </button>
  </div>
</template>
