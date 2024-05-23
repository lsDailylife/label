<template>
    <div class="header">
        <form action="">
            <div>
                <label for="date.start_date">产品编号</label>
                <input type="text" id="date.sku" v-model.trim="date.sku" placeholder="请填写产品编号">
            </div>
            <div>
                <label for="date.end_date">产品规格</label>
                <input type="text" id="date.size" v-model.trim="date.size" placeholder="请填写产品规格">
            </div>
            <div>
                <label for="date.end_date">产品批次</label>
                <input type="number" id="date.batch" v-model.number="date.batch" placeholder="请填写产品批次">
            </div>
            <button type="button" @click="select_data">生成标签</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: {
                sku: '',
                size: '',
                batch: ''
            }
        }
    },
    methods: {
        select_data() {

        }

    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    // position: relative;
    // z-index: 1;
    height: 100%;
    border-bottom: 1px solid #e4e6e9;
    // background: #7ee9f0;
    margin-bottom: 20px;
}

.header_search {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header_search input {
    width: 200px;
    height: 30px;
    margin-left: 20px;
}

.header_search button {}

form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form div {
    margin-right: 30px;
    font-size: large;
    font-weight: bold;
    margin-top: 10px;
}

form div input {
    width: 200px;
    height: 30px;
    margin-left: 20px;
}

form button {
    width: 100px;
    height: 35px;
    margin-left: 20px;
    margin-top: 10px;
    background-color: #1bd8e2;
    color: white;
    border: none;
    border-radius: 5px;
}
</style>