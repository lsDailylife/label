<script setup>
import headervue from './components/header.vue'
import contentvue from './components/content.vue'
import footervue from './components/footer.vue'


</script>

<template>
  <div class="body">
    <headervue />
    <contentvue />
    <footervue />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.body {
  // background-color: #cdf29f;
  width: 1500px;
  height: 1000px;
  margin: auto;
}
</style>