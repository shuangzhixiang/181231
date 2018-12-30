<template>
  <div class="hello">
    
     <!-- {{ this.$store.state.counts}} -->
     {{ counts}}
     <button @click = "changValue"> 按纽</button>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'
import * as mutationTypes from "../store/mutationTypes"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['counts'])
  },
  methods: {
    ...mapMutations([mutationTypes.ADD]),
    changValue(){
      // this.$store.commit("add",12)
      this[mutationTypes.ADD](100)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
