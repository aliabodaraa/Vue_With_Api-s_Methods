<template>
  <Header @toggle-show-form="toggleShowForm" :showAddTask="showAddTask"/>
  <Footer />
  <router-view :showAddTask="showAddTask"></router-view><!-- important 1 -->
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
},
  data(){
    return{
      showAddTask:false
    }
  },
  methods: {
    toggleShowForm(){
      this.showAddTask =! this.showAddTask
    }
  }
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
