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
    async addTask(task){
      const res = await fetch("api/tasks", {
        method: 'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify(task)
      })
      const data = await res.json()
      //return data

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id){
      //console.log("task",id)
      if(confirm("Are You Sure ?")){
       const res= await fetch(`api/tasks/${id}`,{
         method : 'DELETE'
       })
       res.status === 200 ? (this.tasks = this.tasks.filter((task)=>task.id !== id)) : alert("ypu can't delete the task")
}
      
    },
    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: ! taskToToggle.reminder}
      const res = await fetch (`api/tasks/${id}`,{
        method : "PATCH",
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder:data.reminder} : task)
      //this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder} : task)
    },
    //add method for apiin port 5500 in http://localhost:5500/tasks
    async fetchTasks(){
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id){
      const res = await fetch(`api/tasks/${id}`)
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
      this.tasks= await this.fetchTasks()
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
