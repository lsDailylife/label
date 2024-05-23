<script setup>
import left_labelvue from './left/left_label.vue';
import { mapState } from 'vuex'
</script>
<template>
    <div class="left">
        <ul>
            <!-- <li> <span class="iconfont">&#xe604;</span> 大标签</li> -->
            <left_labelvue v-for="item in lable_info" :key="item.id" :label="item" :prop-array="item">
            </left_labelvue>
            <li v-if="edit == 1" class="add_li">
                <button><i class="iconfont">&#xe608;</i>添加自定义标签</button>
            </li>
        </ul>

    </div>
</template>

<script >
export default {
    data() {
        return {
            // label: [
            //     { id: 3, type: '1', name: '小标签' },
            //     { id: 5, type: '2', name: '中标签' },
            //     { id: 13, type: '3', name: '大标签' },
            // ]
        }
    },
    computed: {
        ...mapState(['lable_info']),
        edit() {
            return this.$store.state.edit;
        },
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.left {
    width: 15%;
    height: 100%;
    // background-color: aqua;
    border: 1px solid #ccc;
}

ul {
    width: 100%;
    margin: auto;
    // background-color: aqua;
    padding: 0;
}

.add_li {
    list-style: none;
    width: 100%;
    height: 100px;
}

span {
    font-size: 30px;
    margin-right: 10px;
}

.iconfont {
    font-size: 30px;
    margin-right: 10px;
}

button {
    width: 90%;
    height: 40px;
    background-color: #7ac86f;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-top: 20px;
    margin-left: 10px;
}

button i {
    font-size: 19px !important;
}
</style>