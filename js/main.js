var i = 0;
var j = 1;

//Delete item - Slide off to the left and fade out.
function delete_item(n) {

	n.parentNode.parentNode.parentNode.removeChild(n.parentNode.parentNode);

}

//Edit item - Click icon and change label to a textbox which replaces old label


//Priority bar color change - cycles through different priority levels
function change_priority(n) {
	if (j === 3) {
		j = 0;
	}

	if (j === 0) {
		//replace classes with priority-low class
		n.className = "priority-low";
		//add priority-button class
		n.className += " priority-button";
	} else if (j === 1) {
		n.className = "priority-mid";
		n.className += " priority-button";
	} else {
		n.className = "priority-high";
		n.className += " priority-button";
	}

	j++;

	console.log("j is equal to " + j);
}

//Add blank item to bottom of list
function new_item() {
	
	var blankTask = document.getElementById('original-item');
	var clone = blankTask.cloneNode(true);

	clone.id = 'duplicate' + ++i;
	blankTask.parentNode.appendChild(clone);
	console.log('duplicate' + i + ' created');
}