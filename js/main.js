var i = 0;

//Delete item - Slide off to the left and fade out.
function delete_item(n) {

	n.parentNode.parentNode.parentNode.removeChild(n.parentNode.parentNode);

}

//Priority bar color change - cycles through different priority levels
function change_priority(n) {
	if (n.className === "priority-low priority-button") {
		//replace classes with priority-low class
		n.className = "priority-mid";
		//add priority-button class
		n.className += " priority-button";
	} else if (n.className === "priority-mid priority-button") {
		n.className = "priority-high";
		n.className += " priority-button";
	} else {
		n.className = "priority-low";
		n.className += " priority-button";
	}
}

//Add blank item to bottom of list
function new_item() {
	
	var blankTask = document.getElementById('hidden');
	var clone = blankTask.cloneNode(true);

	clone.id = 'duplicate' + ++i;
	clone.className = "item";
	blankTask.parentNode.appendChild(clone);
}

//Edit list name - Enter name into textbox after clicking and update heading with value
	//display nameInput with focus and hide className
	function edit_name() {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		listName.className = "hidden";
		nameInput.className = "text-box";
		nameInput.focus();
		nameInput.setSelectionRange(0, nameInput.value.length);
	}

	//update listName value to nameInput value and switch places when focus is lost
	function update_name() {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		listName.innerHTML = nameInput.value;
		listName.className = "list-name";
		nameInput.className = "hidden";
	}

	//update listName value to nameInput value and switch places when enter is pressed
	function enter_keypress(event) {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		if (event.which === 13) {
			listName.innerHTML = nameInput.value;
			listName.className = "list-name";
			nameInput.className = "hidden";
		}
	}

//Change color of priority bar and strike through text when checked and remove when unchecked
function complete_task(n) {
	var children = n.childNodes;
	var priorityBar = n.parentNode.previousSibling.previousSibling;
	var checkBox = children[1];

	if (checkBox.checked === true) {
		children[3].className = "complete";
		priorityBar.className = "priority-button priority-complete";
	} else {
		children[3].className = "";
		priorityBar.className = "priority-button priority-low";
	}
}

//Edit item - Click icon and change label to a textbox which replaces old label
