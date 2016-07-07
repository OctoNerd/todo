//array where tasks are stored
var todos = [];

//task object constructor
function Todo(text) {
	this.text = text;
	this.completed = false;
}

//each new task creates a new object which is added to the todos array
function newTask("text") {
	var t = new Todo(text);
	todos.push(t);
}
	//stringify the todos array to a JSON string
	//add JSON string to localstorage
	//check when items are added or deleted to update JSON string
	//when page is refreshed, fetch JSON string and convert back into todos array

//mvc??
//push a button and a new item appears with the text "*new task*"
	//javascript template?
	//clones an existing hidden item
//push another button to change the text of the new task
	//update the text when enter key is pressed or focus is lost.
