
<script setup>
import left from './content/left.vue';
import right from './content/right.vue';
import middle from './content/middle.vue';
</script>
<template>
    <div class="topbar">
        <left />
        <middle />
        <right />
    </div>
</template>


<script>

</script>

<style lang="scss" scoped>
.topbar {
    // background-color: rgb(121, 115, 237);
    height: 800px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
}
</style>