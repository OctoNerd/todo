var todoList = {
	//stores todo list items on an array
	todos: [],
	//adds a new todo object and adds it to the array
	addTodo: function(text) {
		this.todos.push({
			text: text,
			completed: false,
			priority: "low"
		});
	},
	// Edits the text of a todo by array index number
	editTodo: function(i, newText) {
		this.todos[i].text = newText;
	},
	// Remove one todo at index position 'i'
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
	},
	// Toggles the completed value of a todo object at (position 'i') between true and false
	toggleCompleted: function(i) {
		var todo = this.todos[i];
		todo.completed = !todo.completed;
	},
	// Cycles through priority change
	changePriority: function(i) {
		var todo = this.todos[i];
		switch(todo.priority) {
			case "low":
				todo.priority = "mid";
				break;
			case "mid":
				todo.priority = "high";
				break;
			default:
				todo.priority = "low";
		}
	},
	displayTodos: function() {
		for (var i = 0; i < this.todos.length; i++){
			console.log(this.todos[i].text);
		}
	}
}

todoList.addTodo("first");
todoList.addTodo("second");
todoList.addTodo("third");