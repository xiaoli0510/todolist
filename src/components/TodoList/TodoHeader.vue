<script setup lang="ts">
import { ref } from 'vue';
import { type GetTodoListModel } from '@/api/model/todoListModel'
import { ElMessage } from 'element-plus';

const newTodoInput = ref('');
const allList = ref<GetTodoListModel[]>([])
const props = defineProps<{
  list: Array<GetTodoListModel>
}>()
allList.value = props.list;

const handleAddTodo = () => {
  if (!newTodoInput.value) {
    ElMessage({
      message: '请输入内容',
      type:'warning'
    })
  }
  const length = allList.value.length;

  allList.value.push({
    id: length,
    name: newTodoInput.value,
    checked: false
  })
}

</script>
<template>
  <el-input v-model="newTodoInput" @keyup.enter="handleAddTodo" placeholder="请输入">
    <template #prepend>代办事项</template>
    <template #append class="add-button">
      <el-button @click="handleAddTodo">新增</el-button>
    </template>
  </el-input>
</template>
<style scoped></style>