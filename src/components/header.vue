
<script setup>
import header_name from './header/header_name.vue';
import header_search from './header/header_search.vue';
</script>
<template>
    <div class="topbar">
        <header_name />
        <header_search />
    </div>
</template>


<script>

</script>

<style lang="scss" scoped>
.topbar {
    // background-color: aquamarine;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ccc;
}
</style>