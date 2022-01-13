<template>
  <form @submit.prevent="saveTask()">
    <input type="text" name="title" placeholder="Write a title" v-model="task.title">
    <textarea name="description" placeholder="Write a description" rows="3" v-model="task.description"></textarea>
    <button type="submit">Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Task } from '../interfaces/Task';

export default defineComponent({
  name: "TaskForm",
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    saveTask() {
      console.log(this.task);
    }
  }
});

</script>

<style>

</style>