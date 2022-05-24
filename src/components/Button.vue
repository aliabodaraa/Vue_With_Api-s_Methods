<template>
    <button @click="onClick()" class="btn btn-primary" :style="{background:color}">{{text}}</button>
</template>
<script>
export default{
  created () {
      console.log("created button")
  },
  methods: {
      onClick(){
            this.$emit('btn-click')
      }
  },
  //name:'Button',
  props: {
      text:String,
      color:String
  },
}
</script>
