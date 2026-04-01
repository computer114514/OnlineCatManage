<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.btn{
  @apply bg-purple-400 text-indigo-50 px-4 py-2 rounded-full 
  hover:(bg-purple-900) duration-500 transition focus:(ring-8 ring-purple-600);
}
</style>
