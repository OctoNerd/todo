var i = 0;

//Delete item - Slide off to the left and fade out.
function delete_item(n) {

	n.parentNode.parentNode.parentNode.removeChild(n.parentNode.parentNode);

}

//Edit item - Click icon and change label to a textbox which replaces old label


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
	
	var blankTask = document.querySelector('.item');
	var clone = blankTask.cloneNode(true);

	clone.id = 'duplicate' + ++i;
	blankTask.parentNode.appendChild(clone);
	console.log('duplicate' + i + ' created');
}