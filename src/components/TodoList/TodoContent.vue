<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">全部1</el-tab-pane>
        <el-tab-pane label="进行中" name="second">进行中</el-tab-pane>
        <el-tab-pane label="已完成" name="third">已完成</el-tab-pane>
    </el-tabs>
    <p v-if="loading">Loading...</p>
    <div v-else>{{filterList}}</div>
    <div v-for="item in filterList" class="list">
        <el-checkbox v-model="c" :label="item.name" size="large" />
        <el-checkbox v-model="checked2" :label="item.name" size="large" />
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getTodoList } from '@/api/index'
import {type GetTodoListModel} from '@/api/model/todoListModel'

const checked1 = ref(true)
const checked2 = ref(false)
const loading= ref(true)
const activeName = ref('first')
let filterList = ref<GetTodoListModel>()
onMounted(async ()=>{
    try{
await getList()
    }catch(error){

    }finally{
        loading.value=false
    }
})

const getList = async () => {
    const res = await getTodoList()
    console.log(res.data)
    filterList.value=res.data.list
    console.log(filterList)
}


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