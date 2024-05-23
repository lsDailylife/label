<script setup>
import middle_top from './middle/middle_top.vue';
import small_label from './middle/small_label.vue';
</script>
<template>
    <div class="middle">
        <middle_top />
        <!-- v-print指令可以直接绑定到对应的打印区域-->
        <div class="label">
            <div class="button_label">
                <button v-print="printObj" class="print_button">标签打印</button>
            </div>
            <div id="printBox">
                <small_label />
                <!-- <div>left</div>
                <div>right</div> -->
            </div>
        </div>

    </div>
</template>

<script >
export default {
    name: 'middle',
    //v-print除了绑定对应打印区域的id外，还可以绑定一个配置对象。
    data() {
        return {
            printLoading: true,
            printObj: {
                id: 'printBox',//这里的id就是上面我们的打印区域id，实现指哪打哪
                popTitle: '标签打印', // 打印配置页上方的标题
                extraHead: '', // 最上方的头部文字，附加在head标签上的额外标签，使用逗号分割
                preview: false, // 是否启动预览模式，默认是false
                previewTitle: '预览的标题', // 打印预览的标题
                previewPrintBtnLabel: '预览结束，开始打印', // 打印预览的标题下方的按钮文本，点击可进入打印
                zIndex: 20002, // 预览窗口的z-index，默认是20002，最好比默认值更高
                previewBeforeOpenCallback() { console.log('正在加载预览窗口！'); }, // 预览窗口打开之前的callback
                previewOpenCallback() { console.log('已经加载完预览窗口，预览打开了！') }, // 预览窗口打开时的callback
                beforeOpenCallback() { console.log('开始打印之前！') }, // 开始打印之前的callback
                openCallback() { console.log('执行打印了！') }, // 调用打印时的callback
                closeCallback() { console.log('关闭了打印工具！') }, // 关闭打印的callback(无法区分确认or取消)
                clickMounted() { console.log('点击v-print绑定的按钮了！') },
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.middle {
    width: 65%;
    height: 100%;
    background-color: #70C6DE;
}

.label {
    width: 90%;
    height: 750px;
    // background-color: aqua;
    // border: 1px solid #000;
    margin: auto;
}

.button_label {
    width: 100%;
    height: 50px;
    // background-color: #e4dede;
    // border: 1px solid #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.button_label button {
    width: 100px;
    height: 40px;
    // background-color: #e4dede;
    border-radius: 5px;
    border: none;
    color: white;
    // margin: auto;
    font-size: 20px;
    font-weight: bold;
}

.button_label button:hover {
    background-color: #000;
}

.button_label button:active {
    background-color: #000;
    color: white;
}

.button_label button:focus {
    background-color: #000;
    color: white;
}

.button_label button:visited {
    background-color: #000;
    color: white;
}

#printBox {
    width: 855px;
    height: 175px;
    background-color: white;

    // border: 1px solid #000;
    margin: auto;
    margin-top: 200px;
}

.print_button {
    background-color: #409eff;
}
</style>