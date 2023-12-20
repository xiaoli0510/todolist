<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="进行中" name="1"></el-tab-pane>
        <el-tab-pane label="已完成" name="2"></el-tab-pane>
    </el-tabs>
    <div>
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
            全选
        </el-checkbox>
        <div v-for="(item,index) in filterList" class="list" :key="index">
            <el-checkbox v-model="item.checked" :label="item.name" size="large" />
            <el-button type="primary" @click="handleDelete(index)">刪除</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,  watch } from 'vue'
import { type GetTodoListModel } from '@/api/model/todoListModel'

const activeName = ref('0')//0全部 1进行中 2已完成 
const filterList = ref<GetTodoListModel[]>([])
const checkAll= ref(false)
const isIndeterminate= ref(false)

const props = defineProps<{
    list:Array<GetTodoListModel>
}>()

filterList.value=props.list;

//删除
const handleDelete=(index:number)=>{
    filterList.value.splice(index,1);
}

//全选
const handleCheckAllChange = (val:boolean)=>{
    filterList.value.forEach(item=>{val?item.checked=true:item.checked=false})
    checkAll.value=val
}

//监听activeName 
watch(activeName, (newValue:string) => {
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

//监听列表复选框的选中状态
watch(filterList,(newValue:GetTodoListModel[])=>{
    if(newValue.length==0){
        checkAll.value=false
        isIndeterminate.value=false
    } else {
        checkAll.value=newValue.every(item=>item.checked)
        isIndeterminate.value=!checkAll.value&&newValue.some(item=>item.checked)
    }
},{deep:true,immediate:true})
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