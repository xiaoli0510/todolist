<script setup lang="ts">
import { ref } from 'vue';

let newTodoInput = ref('');
function addTodo() {

}
</script>
<template>
  <el-input v-model="newTodoInput" placeholder="Please input">
    <template #prepend>代办事项</template>
    <template #append class="add-button" @click="addTodo">
      新增
    </template>
  </el-input>
</template>
<style scoped>
</style>