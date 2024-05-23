
<script setup>
import { mapState } from "vuex";
</script>
<template>
    <div class="top">
        <span class="title">{{ list.sku }} {{ list.name }} {{ show_id }}</span>
    </div>
</template>


<script>
export default {
    name: "middle_top",
    computed: {
        ...mapState(['show_id', 'show_list']),
        list() {
            var b = JSON.parse(JSON.stringify(this.show_list));
            return b[0];
        }
    },
    methods: {
        proxyToArray(proxy) {
            // 假设proxy确实代理了一个数组  
            const array = [];
            for (let i = 0; i < proxy.length; i++) {
                array.push(proxy[i]);
            }
            return array;
        }
    }
}
</script>

<style lang="scss" scoped>
.top {
    width: 100%;
    height: 30px;
    background-color: rgb(205, 244, 244);
}

.title {
    line-height: 30px;
    font-weight: bold;
    margin-left: 10px;
}
</style>