<script setup>
import { mapState } from "vuex";
</script>
<template>
    <div class="label_box">
        <div class="left">
            <div></div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        ...mapState(['show_id', 'show_list']),
        list() {
            var b = JSON.parse(JSON.stringify(this.show_list));
            return b[0];
        }
    },
}
</script>

<style lang="scss" scoped>
.label_box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
}

.left {
    width: 50%;
    height: 100%;
}

.right {
    width: 50%;
    height: 100%;
}
</style>