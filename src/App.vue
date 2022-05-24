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
    }
  },
  name: 'App',
  components: {
    Header,
    all_Tasks,
    AddTask,
},
    created () {
      
      console.log("created App"),
      this.tasks=[{
            id:1,
            name: 'asem',
            email: 'salemsem@gmail.com',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non alias pariatur et earum nulla cumque sequi iste asperiores facere, voluptatibus, tenetur veniam doloremque accusantium excepturi, odio mollitia numquam ad.',
            gender: 'male',
            age:13,
            date:2022/12/12,
            picture: 'https://randomuser.me/api/portraits/women/29.jpg',
            reminder:true,
      },{
            id:2,
            name: 'ahmad',
            email: 'abodaraahmad@gmail.com',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non alias pariatur et earum nulla cumque sequi iste asperiores facere, voluptatibus, tenetur veniam doloremque accusantium excepturi, odio mollitia numquam ad.',
            gender: 'male',
            age:21,
            date:2022/12/12,
            picture: 'https://randomuser.me/api/portraits/women/21.jpg',
            reminder:false,
      },{
            id:3,
            name: 'Thomas',
            email: 'abodaraThomas@gmail.com',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non alias pariatur et earum nulla cumque sequi iste asperiores facere, voluptatibus, tenetur veniam doloremque accusantium excepturi, odio mollitia numquam ad.',
            gender: 'male',
            age:43,
            date:2022/12/12,
            picture: 'https://randomuser.me/api/portraits/women/21.jpg',
            reminder:false,
      },{
            id:4, 
            name: 'locas',
            email: 'abodaralocas@gmail.com',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non alias pariatur et earum nulla cumque sequi iste asperiores facere, voluptatibus, tenetur veniam doloremque accusantium excepturi, odio mollitia numquam ad.',
            gender: 'male',
            age:54,
            date:2022/12/12,
            picture: 'https://randomuser.me/api/portraits/women/40.jpg',
            reminder:false,
      }]
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
