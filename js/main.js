var todoList = {
	// Stores todo list items on an array
	todos: [],
	//Add blank item to bottom of list
	newItem: function() {
		var blankTask = document.getElementById('hidden');
		var clone = blankTask.cloneNode(true);
		var i = 0;

		clone.id = 'duplicate' + ++i;
		clone.className = "item";
		blankTask.parentNode.appendChild(clone);
	},
	//Edit list name - Enter name into textbox after clicking and update heading with value
	editName: function() {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		listName.className = "hidden";
		nameInput.className = "list-name__input";
		nameInput.focus();
		nameInput.setSelectionRange(0, nameInput.value.length);
	},
	//update listName value to nameInput value and switch places when focus is lost
	updateName: function() {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		if (nameInput.value === "") {
			listName.innerHTML = "To do:";
		} else {
			listName.innerHTML = nameInput.value;
		}

		listName.className = "list-name";
		nameInput.className = "hidden";
	},
	//update listName value to nameInput value and switch places when enter is pressed
	enterKeypress: function(event) {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		if (event.which === 13) {
			if (nameInput.value === "") {
				listName.innerHTML = "To do:";
			} else {
				listName.innerHTML = nameInput.value;
			}

			listName.className = "list-name";
			nameInput.className = "hidden";
		}
	},
	//Change color of priority bar and strike through text when checked and remove when unchecked
	completeTask: function(n) {
		var children = n.childNodes;
		var priorityBar = n.parentNode.previousSibling.previousSibling;
		var checkBox = children[1];

		if (checkBox.checked === true) {
			children[3].className = "item__label-text--complete";
			priorityBar.className = "item__priority-button--complete";
			priorityBar.parentNode.style.backgroundColor = "#E0E0E0";
		} else {
			children[3].className = "";
			priorityBar.className = "item__priority-button--default";
			priorityBar.parentNode.style.backgroundColor = "white";
		}
	},
	//Edit item - Click icon and change label to a textbox which replaces old label
	editItem: function(n) {
		var editBtn = n;
		var taskText = editBtn.parentNode.childNodes[1].childNodes[3];
		var taskInput = editBtn.parentNode.childNodes[3];

		if (taskText.className != "complete") {
			taskText.className = "hidden";
			taskInput.className = "task-input";
			taskInput.focus();
			taskInput.setSelectionRange(0, taskInput.value.length);
		} else {
			//Can't edit text if already complete
		}
	},
	updateItem: function(n) {
		var editBtn = n;
		var taskText = editBtn.parentNode.childNodes[1].childNodes[3];
		var taskInput = editBtn.parentNode.childNodes[3];

		taskText.innerHTML = taskInput.value;
		taskText.className = "";
		taskInput.className = "hidden";
	},
	itemEnterKeypress: function(n, event) {
		var taskInput = n;
		var taskText = taskInput.parentNode.childNodes[1].childNodes[3];

		if (event.which === 13) {
			taskText.innerHTML = taskInput.value;
			taskText.className = "";
			taskInput.className = "hidden";
		}
	},
	//Priority bar color change - cycles through different priority levels
	changePriority: function(n) {
		if (n.className === "item__priority-button--default") {
			n.className = "item__priority-button--mid";
		} else if (n.className === "item__priority-button--mid") {
			n.className = "item__priority-button--high"	;	
		} else if (n.className === "item__priority-button--high") {
			n.className = "item__priority-button--default";
		} else {
			//Can't change priority color if already completed
		}
	},
	//Delete item - Slide off to the left and fade out.
	deleteItem: function(n) {
		var item = n.parentNode.parentNode;
		var stopSliding = -300;
		
		item.style.left = 0;
		slideLeft();
		fade(item);

		function slideLeft() {
			if (parseInt(item.style.left) > stopSliding) {
				item.style.left = (parseInt(item.style.left) - 2) + "px";
				setTimeout(slide_left, 1);
			}
		}

		function fade(element) {
			var op = 1;  // initial opacity
		    var timer = setInterval(function () {
		        if (op <= 0.01){
		            clearInterval(timer);
		            item.parentNode.removeChild(item);
		        }
		        element.style.opacity = op;
		        element.style.filter = '(opacity=' + op * 100 + ")";
		        op -= op * 0.1;
		    }, 10);
		}
	}
};

var handlers = {

};

var view = {

};