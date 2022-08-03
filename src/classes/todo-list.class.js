import { Todo } from "./todo.class";

import { countTodo } from "../js/componentes";


export class TodoList {

    constructor(){

        
        this.cargarLocalStorga();
        this.countTodo();

    }

    nuevoTodo (todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.countTodo();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
        this.countTodo();


    }

    marcarCompletado (id){
        for (const todo of this.todos){
            
            if(todo.id==id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.countTodo();
                break;
            }
        }


    }

    countTodo(){
        let pendientes = 0;
        let countBox = countTodo.firstElementChild;
        for (let todo of this.todos){
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML=pendientes;
    }

    eliminarCompletados (){

        this.todos= this.todos.filter(todo=>!todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem("todo", JSON.stringify(this.todos));

    }

    cargarLocalStorga(){


    this.todos=(localStorage.getItem("todo"))
                ?this.todos=JSON.parse(localStorage.getItem("todo"))
                :[];
        this.todos= this.todos.map(Todo.fromJson);

      

    }

}