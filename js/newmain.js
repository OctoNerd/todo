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
		todoList.addTodo("*new task*");
		view.displayTodos();
	},
	deleteTodo: function(id) {
		todoList.deleteTodo(id);
		view.displayTodos();
	}
};

var view = {
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;
			var parentElement = elementClicked.parentNode;

			console.log(elementClicked.className + " was clicked");
		});
	},
	deleteTodo: function(n) {
		handlers.deleteTodo(n.parentNode.parentNode.id);
	},
	displayTodos: function() {
		var todosUl = document.querySelector('ul');//empty ul
		todosUl.innerHTML = '';

		for (var i = 0; i < todoList.todos.length; i++) {
			var originalItem = document.getElementById('original-item');//Item to be cloned
			var newItem = originalItem.cloneNode(true);//Clones original-item

			newItem.id = i;//unique id for each item based on position in array

			todosUl.appendChild(newItem);//puts the new clone into the ul

			var node = newItem.querySelector('span');//selects the span of the new todolist item
			node.innerText = todoList.todos[i].text;//sets the span text to the text property of the todo object
			newItem.className = "item";//displays the item by changing from .hidden to .item
		}
	}
};

todoList.addTodo("Walk the dog");
todoList.addTodo("second");
todoList.addTodo("third");
view.setUpEventListeners();
view.displayTodos();