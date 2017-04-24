var todo = angular.module("todoApp", []);
todo.controller("TodoCtrl", TodoCtrl);

function TodoCtrl(){
    this.editMode = false;
    this.todos = [
        "Learn Angular",
        "try out Exercise",
        "from Youtube"
    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    }
}

