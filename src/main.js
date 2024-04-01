import { createApp } from 'vue'
import App from './App.vue'

import {createStore} from "vuex";

const store = createStore({

    state(){
        return {
            todos : []
        }
    },
    getters : {
        todolarYuklendi(state)
        {
            console.log("todolar yuklendi cagrildi");
            return state.todos.filter((todo) => todo.completed);
        }
    },
    mutations : {
        todolariEkle(state,payload) {
            console.log("todolari ekle cagrildi");
            state.todos = payload
        }
    },
    actions : {
        todolariGetir(context)
        {
            console.log("todolari getir cagrildi");
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                //console.log(context.c);
                context.commit("todolariEkle",data);
            });
        }
    }
 });

const app = createApp(App)

// use the store in the App
app.use(store)

app.mount('#app')