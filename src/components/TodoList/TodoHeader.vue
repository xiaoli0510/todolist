<script setup lang="ts">
import { ref } from 'vue';

let newTodoInput = ref('');

</script>
<template>
  <el-input v-model="newTodoInput" placeholder="Please input">
    <template #prepend>代办事项</template>
    <template #append class="add-button" >
      <button @click="$emit('add-todo')">新增</button>
    </template>
  </el-input>
</template>
<style scoped>
</style>