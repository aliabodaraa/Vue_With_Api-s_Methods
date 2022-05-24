<template>
  <div :key="task.id" v-for="task in tasksBind">
     <Task :taskOne='task' @delete-task="$emit('delete-task',task.id)" @toggle-reminder="$emit('toggle-reminder',task.id)"/>
  </div>
</template>
<script>
import Task from "./Task"
export default{
 //name: 'Tasks',
 components:{
     Task
 },
 props:{
     tasksBind: Array,
 },
 emits:[
     'delete-task','toggle-reminder'
 ]
}
</script>