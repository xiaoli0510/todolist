<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">全部1</el-tab-pane>
        <el-tab-pane label="进行中" name="second">进行中</el-tab-pane>
        <el-tab-pane label="已完成" name="third">已完成</el-tab-pane>
    </el-tabs>
    <div v-for="item in filterList" class="list">
        <el-checkbox v-model="checked1" :label="item.name" size="large" />
        <el-checkbox v-model="checked2" :label="item.name" size="large" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getTodoList } from '@/api/index'
const checked1 = ref(true)
const checked2 = ref(false)
const activeName = ref('first')
const filterList = ref([{
    name: 'list1',
    id: 1
}])
const requests = async () => {
    const res = await getTodoList()
    console.log(res)
}
requests()


const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
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
    flex-direction: column;
}
</style>