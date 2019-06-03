export class TodoService {

    checked: boolean;

    getTodos() {
        //Fetch from localStorage        
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    }
    addTodo(newTodo) {
        //Fetch from localStorage
        var todos = JSON.parse(localStorage.getItem('todos'));
        //Add new Todo
        //push new item in to the array
        todos.push(newTodo);
        //Set new Todo
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    deleteTodo(id) {
        //Fetch from localStorage
        var todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(id, 1);
        //Update local storage. For later, use a function for removing item 
        //without the need to use setItem
        localStorage.setItem('todos', JSON.stringify(todos));

    }
    updateTodo(toggled) {
        //Fetch from localStorage. Check if twin is found
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].text == toggled.text) {
                todos[i].completed = toggled.completed;
            }
        }
        //update todo
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    showCompleted() {
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    }

}