<script setup lang="ts">
import TodoHeader from '../components/TodoList/TodoHeader.vue'
import TodoContent from '../components/TodoList/TodoContent.vue'
import { type GetTodoListModel } from '@/api/model/todoListModel'
import { onMounted, ref } from 'vue';
import { getTodoList } from '@/api/index'

const loading = ref(true);
const allList = ref<GetTodoListModel[]>([])

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

</script>

<template>
    <main>
        <TodoHeader :list="allList" v-if="!loading" />
        <TodoContent :list="allList" v-if="!loading" />
    </main>
</template>