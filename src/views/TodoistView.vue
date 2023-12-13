<script setup lang="ts">
import TodoHeader from '../components/TodoList/TodoHeader.vue'
import TodoContent from '../components/TodoList/TodoContent.vue'
import { type GetTodoListModel } from '@/api/model/todoListModel'
import { onMounted, ref } from 'vue';
import { getTodoList } from '@/api/index'
import { ElMessage } from 'element-plus'

const loading = ref(true);
const allList = ref<GetTodoListModel[]>([])
const todoHeader:any= ref<HTMLElement>();

onMounted(async () => {
    try {
        await getList()
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
})

//获取列表
const getList = async () => {
    const res = await getTodoList()
    allList.value = res.data.list
}

//新增
function handleAddTodo() {
    if (todoHeader.value && !todoHeader.value['newTodoInput']) {
        ElMessage({
            message: '请先输入内容',
            type: 'warning'
        })
        return
    }
   todoHeader.value.addTodo()
} 
</script>

<template>
    <main>
        <TodoHeader @add-todo="handleAddTodo" ref="todoHeader" :list="allList" v-if="!loading" />
        <TodoContent :list="allList" v-if="!loading" />
    </main>
</template>