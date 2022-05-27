<template>
    <div class="container">
          <Button v-show="homePage" :text="showAddTask ?'Close' : 'Create Task'" :color="showAddTask ?'red' : '#768'" @btn-click="$emit('toggle-show-form')"/>
          <Button text="Update Task" color="blue"/>
          <Button text="Delete Task" color="red"/>
    </div>
</template>
<script>
import Button from './Button'
export default ({
  props: {
      showAddTask:Boolean
  },
    //name:"Header",
    components:{
        Button
    },
      created () {
      console.log("created Header")
  },
        updated () {
      console.log("updated Header")
  },
 // emits:['toggle-show-form']
 computed:{
   homePage(){
     if(this.$route.path==='/')
        return true
      return false
   }
 }
})
</script>