<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="全部" name="0">全部</el-tab-pane>
        <el-tab-pane label="进行中" name="1">进行中</el-tab-pane>
        <el-tab-pane label="已完成" name="2">已完成</el-tab-pane>
    </el-tabs>
    <div>
        <div v-for="item in filterList" class="list">
            <el-checkbox v-model="item.checked" :label="item.name" size="large" />
            <el-button type="primary" >刪除</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,  watch } from 'vue'
import { type GetTodoListModel } from '@/api/model/todoListModel'

const activeName = ref('0')//0全部 1进行中 2已完成 
const filterList = ref<GetTodoListModel[]>([])

const props = defineProps<{
    list:Array<GetTodoListModel>
}>()

filterList.value=props.list;

//监听activeName 
watch(activeName, (newValue) => {
    switch (newValue) {
        case '1':
            filterList.value = props.list.filter(item => !item.checked);
            break;
        case '2':
            filterList.value = props.list.filter(item => item.checked);
            break;
        default:
            filterList.value = props.list;
            break;
    }
})
</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>