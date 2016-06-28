//Delete item - Slide off to the left and fade out.

//Edit item - Click icon and change label to a textbox which replaces old label

//Priority bar color change - cycles through different priority levels

//Add blank item to bottom of list
var i = 0;

function new_item() {
	var blankTask = document.getElementById('original-item');
	var clone = blankTask.cloneNode(true);

	clone.id = "duplicate" + ++i;
	blankTask.parentNode.appendChild(clone);

}