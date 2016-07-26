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
	//logs todo text to the console for every item in todos array
	displayTodos: function() {

		var todoTextWithCompletion = '';
		for (var i = 0; i < this.todos.length; i++){
			var todo = this.todos[i];
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.text;
			} else {
				todoTextWithCompletion = '( ) ' + todo.text;
			}

			console.log(todoTextWithCompletion);
		}
	}
};

var handlers = {
	newTodo: function() {

	}
};

var view = {
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;
			console.log(elementClicked);
		});
	},
	newTodo: function() {
		var todoUl = document.querySelector('ul');
		var originalItem = document.getElementById('original-item');
		var newItem = originalItem.cloneNode(true);
		var itemPosition = todoList.todos.length;

		newItem.id = itemPosition;
		newItem.className = "item";
		todoUl.appendChild(newItem);
	}
};

todoList.addTodo("first");
todoList.addTodo("second");
todoList.addTodo("third");
view.setUpEventListeners();