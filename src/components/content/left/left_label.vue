<script setup>

</script>

<template>
    <li @click="change_show_id(label.id)">
        <div class="top"><i class="iconfont icon" v-html="icon"></i><span>{{ label.name }}</span><i
                class="iconfont">&#xe60c;</i></div>
        <div v-if="edit == 1" class="under">
            <button class="edit"><i class="iconfont ">&#xe616;</i>修改</button>
            <button class="delete"><i class="iconfont">&#xe626;</i>删除</button>
        </div>
    </li>
    <!-- <li>123</li> -->
</template>

<script>
export default {
    // { id: 3, type: '1', name: '小标签' },
    props: {
        label: {
            type: Object, // 或者其他适当的类型  
            required: true
        }
    },
    computed: {
        icon() {
            if (this.label.type == 1) {
                return '&#xe87f;'
            }
            if (this.label.type == 2) {
                return '&#xe6c8;'
            }
            if (this.label.type == 3) {
                return '&#xe604;'
            }
            return ''
        },
        edit() {
            return this.$store.state.edit
        }

    },
    data() {
        return {
            // label: this.label
        }
    },
    methods: {
        change_show_id(id) {
            this.$store.commit('change_show_id', id);
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
    font-size: 14px;
    color: #666;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    // height: 30px;
}

li:hover {
    background-color: #f5f5f5;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
}

.under {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

span {
    margin-left: 10px;
    font-size: 25px;
}

.icon {
    color: #666;
}

.icon:hover {}

.iconfont {
    font-size: 25px;
}

.under button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}

.edit {
    background-color: #ccc;
}

.delete {}

.edit {
    background-color: #409eff;
}

.delete {
    background-color: red;
}

.under i {
    font-size: 15px;
    margin-right: 5px;
}
</style>