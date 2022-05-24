<template>
  <Header @toggle-show-form="toggleShowForm" :showAddTask="showAddTask"/>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask"/>
  </div>
  <all_Tasks :tasksBind="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
</template>

<script>
import Header from './components/Header.vue'
import all_Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
    data(){
    return{
      tasks:[],
      showAddTask:false
    }
  },
  methods: {
    toggleShowForm(){
      this.showAddTask =! this.showAddTask
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      //console.log("task",id)
      if(confirm("Are You Sure ?"))
      this.tasks = this.tasks.filter((task)=>task.id !== id)
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder} : task)
    },
    //add method for apiin port 5500 in http://localhost:5500/tasks
    async fetchTasks(){
      const res = await fetch('http://localhost:5500/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:5500/tasks/${id}`)
      const data = await res.json()
      return data
    }
  },
  name: 'App',
  components: {
    Header,
    all_Tasks,
    AddTask,
},
   async created () {
      
      //console.log("created App"),
      this.tasks= await this.fetshTasks()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
