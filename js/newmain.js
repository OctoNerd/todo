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
		};
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
	},
	editTodo: function(textInput, itemIndex) {
		textInput.value = todoList.todos[itemIndex].text;
	},
	updateTodo: function(textInput, itemIndex) {
		todoList.editTodo(itemIndex, textInput.value);
		view.displayTodos();
	},
	enterKeyPressed: function(element, event) {
		var textInput = element;
		var itemIndex = textInput.parentNode.parentNode.id;
		if (event.keyCode === 13) {
			handlers.updateTodo(textInput, itemIndex);
		};
	},
	changePriority: function(itemIndex) {
		todoList.changePriority(itemIndex);
		view.displayTodos();
	},
	toggleCompleted: function(itemIndex) {
		todoList.toggleCompleted(itemIndex);
		view.displayTodos();
	}
};

var view = {
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;
			var parentElement = elementClicked.parentNode;

			switch(elementClicked.className) {
				case "item__check-box":
					var itemIndex = parentElement.parentNode.parentNode.id;
					handlers.toggleCompleted(itemIndex);
					break;
				default:
					console.log(elementClicked);
			}
		});
	},
	deleteTodo: function(deleteBtn) {
		handlers.deleteTodo(deleteBtn.parentNode.parentNode.id);
	},
	displayTodos: function() {
		var todosUl = document.querySelector('ul');//empty ul
		todosUl.innerHTML = '';

		for (var i = 0; i < todoList.todos.length; i++) {
			var originalItem = document.getElementById('original-item');//Item to be cloned
			var newItem = originalItem.cloneNode(true);//Clones original-item
			var priorityBar = newItem.querySelector('div');//gets first div in newItem which is the priority bar

			newItem.id = i;//unique id for each item based on position in array

			todosUl.appendChild(newItem);//puts the new clone into the ul

			var span = newItem.querySelector('span');//selects the span of the new todolist item

			span.innerText = todoList.todos[i].text;//sets the span text to the text property of the todo object

			//checks priority to determine bar color
			switch(todoList.todos[i].priority) {
				case "mid": 
					priorityBar.className = "item__priority-button--mid";
					break;
				case "high":
					priorityBar.className = "item__priority-button--high";
					break;
				default:
					priorityBar.className = "item__priority-button--default";
			};

			//checks whether the task is completed or not
			if (todoList.todos[i].completed === true) {
				priorityBar.className = "item__priority-button--complete";
				span.className = "item__label-text--complete";
				priorityBar.parentNode.style.backgroundColor = "#E0E0E0";
			} else {
				span.className = "";
				priorityBar.parentNode.style.backgroundColor = "white";
			}

			newItem.className = "item";//displays the item by changing from .hidden to .item
		}
	},
	editTodo: function(editBtn) {
		var editBtn = editBtn;
		var parentWrapper = editBtn.parentNode;
		var textInput = editBtn.parentNode.childNodes[3];
		var text = textInput.value;
		var span = parentWrapper.querySelector('span');
		var itemIndex = parentWrapper.parentNode.id;

		span.className = 'hidden';
		textInput.className = '';
		textInput.focus();
		handlers.editTodo(textInput, itemIndex);
	},
	updateTodo: function(textInput) {
		var textInput = textInput;
		var itemIndex = textInput.parentNode.parentNode.id;
		var span = textInput.parentNode.querySelector('span');

		handlers.updateTodo(textInput, itemIndex);

		textInput.className = 'hidden';
		span.className = '';
	},
	selectText: function(buttonClicked) {
		var textInput = buttonClicked.parentNode.childNodes[3];
		textInput.setSelectionRange(0, textInput.value.length);
	},
	changePriority(buttonClicked) {
		var priorityBar = buttonClicked;
		var itemIndex = priorityBar.parentNode.id;

		handlers.changePriority(itemIndex);
	}
};

todoList.addTodo("Walk the dog.");
view.setUpEventListeners();
view.displayTodos();