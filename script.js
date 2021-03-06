var list = {
    todos: [],
    displayTodos: function() { // anonymous function
        if (this.todos.length === 0)
            console.log('Empty todo list');
        else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; ++i) {
                if (this.todos[i].completed)
                    console.log('(x)', this.todos[i].todoText);
                else
                    console.log('( )', this.todos[i].todoText);
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        // this.todos[position] = newV;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var completed = 0;
        for (var i = 0; i < this.todos.length; ++i) {
            if (this.todos[i].completed)
                ++completed;
        }
        if (completed === this.todos.length) {
            for (var i = 0; i < this.todos.length; ++i)
                this.todos[i].completed = false;
        } else {
            for (var i = 0; i < this.todos.length; ++i)
                this.todos[i].compelted = true;
        }
    }
};

var handlers = { // handle different events such as clicks
	displayTodos: function () {
		list.displayTodos();
	},
	toggleAll: function() {
		list.toggleAll();
	},
	addTodo: function() {
		list.addTodo(document.getElementById('addTodoTextInput').value);
		document.getElementById('addTodoTextInput').value = '';
	}
};