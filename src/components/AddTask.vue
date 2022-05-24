<template>
    <form @submit="submitTask">
        <div class="form-control">
            <label for="picture">Name</label>
            <input type="file" name="picture" id="" placeholder="Add Image" value="">
        </div>
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="text" id="" placeholder="Add Name" v-model="name">
        </div>
        <div class="form-control">
            <label for="task">Body</label>
            <input type="text" name="text" id="" placeholder="Add Body" v-model="body">
        </div>
        <div class="form-control">
            <label for="task">date</label>
            <input type="date" name="date" id="" placeholder="Add Date" v-model="date">
        </div>
        <div class="form-control">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="" placeholder="Add E-mail" v-model="email">
        </div>
        <div class="form-control">
            <label for="male">Male</label>
            <input type="radio" name="gender" value="male" v-model="gender">
            <br>
            <label for="female">Female</label>
            <input type="radio" name="gender" value="female"  v-model="gender">
        </div>     
        <div class="form-control">
            <label for="task">Phone</label>
            <input type="number" name="phone" id="" placeholder="Add Phone" v-model="phone">
        </div>
        <div class="form-control">
            <label for="age">Age</label>
            <input type="number" name="age" id="" placeholder="Add Age" v-model="age">
        </div>
        <div class="form-control">
            <label for="reminder">Set Reminder</label>
            <input type="checkbox" name="reminder" id="" placeholder="reminder" v-model="reminder">
        </div>         
        <input type="submit" value="Save Task" class="btn btn-success">
    </form>
</template>
<script>
export default {
  data () {
    return {
        picture:'',
        email:'email1@gmail.com',
        name:null,
        body:'add task',
        date:'d',
        gender:'',
        phone:'',
        age:null,
        reminder:false
    }
  },

  methods: {
      submitTask(e){
          e.preventDefault()
        //   if(!this.text){
        //       alert('please ass a task')
        //       return
        //   }
          const newTask = {
              id : Math.floor(Math.random() * 100),
              picture: this.picture,
              name:this.name,
              email: this.email,
              body : this.body,
              date : this.date,
              phone : this.phone,
              age : this.age,
              gender : this.gender,
              reminder: this.reminder,
          }
          //console.log(newTask)    
          this.$emit('add-task',newTask)
      this.picture= '',
      this.name = '',
      this.email = '',
      this.phone = '',
      this.body = '',
      this.date = '',
      this.gender = '',
      this.age = '',
      this.reminder = false
      }
  },
 //name:'AddTask'

}
</script>