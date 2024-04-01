<template>
  <div id="app">
 
      <ul>
       <li v-for="todo in todolarYuklendi" :key="todo.id">{{todo.title}}</li>
      </ul>
   </div>
 </template>
 
 <script>
 
 import {mapActions, mapGetters} from "vuex";
 export default {
   name: 'App',
   methods : {
     ...mapActions(["todolariGetir"])
   },
   computed : {
     ...mapGetters(["todolarYuklendi"])
   },
   created() {
     this.todolariGetir();
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