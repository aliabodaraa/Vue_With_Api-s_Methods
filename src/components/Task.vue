<template>
          <div class="card" style="width: 18rem;float: left;margin: 40px;" :class="[taskOne.reminder? 'task-border':'']" @dblclick="this.$emit('toggle-reminder',taskOne.id)">
            <img :src="taskOne.picture" class="card-img-top" alt="...">
            <i @click="onDelete(taskOne.id)" class="fas fa-times"></i>
            <div class="card-body">
                <h2 class="card-title">name:{{taskOne.name}}</h2>
                <p class="card-text">E-mail:{{taskOne.email}}</p>
                <p class="card-text">Gender:{{taskOne.gender}}</p>
                <p class="card-text">Body:{{taskOne.body}}</p>
                <p class="card-text">Phone:{{taskOne.phone}}</p>
                <p class="card-text">Age:{{taskOne.age}}</p>
                <p class="card-text">Date:{{taskOne.date}}</p>
                <p class="card-text">Date:{{taskOne.reminder}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
</template>

<script>

export default ({
  methods: {
      onDelete(id){
        //console.log(id)
        this.$emit('delete-task',id)//'delete-task' is an option name
      }
  },
    //name:"Task",
    props :{
        taskOne:Object,
    },
})
</script>
<style scoped>
.fas{
    right: 7px;
    color: red;
    position: absolute;
    font-size: 49px;
}
.task-border{
    border-right: #598 solid;
}
</style>