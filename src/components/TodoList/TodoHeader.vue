<script setup lang="ts">
import { ref } from 'vue';
import { type GetTodoListModel } from '@/api/model/todoListModel'

const newTodoInput = ref('');
const allList = ref<GetTodoListModel[]>([])
const props = defineProps<{
  list: Array<GetTodoListModel>
}>()
allList.value = props.list;

const addTodo = () => {
  const length = allList.value.length;
  allList.value.push({
    id: length,
    name: newTodoInput.value,
    checked: false
  })
}

defineExpose({
  newTodoInput,
  addTodo
})

</script>
<template>
  <el-input v-model="newTodoInput" placeholder="Please input">
    <template #prepend>代办事项</template>
    <template #append class="add-button">
      <el-button @click="$emit('add-todo')">新增</el-button>
    </template>
  </el-input>
</template>
<style scoped></style>