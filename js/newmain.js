//array where tasks are stored
var tasks = [];

//task object constructor
function Task(text) {
	this.text = text;
	this.completed = false;
}

//each new task creates a new object which is added to the todos array
function newTask(text) {
	var t = new Task(text);
	tasks.push(t);
}

//Remove task from todo array by index number
function removeTask(index) {
	tasks.splice(index, 1);
}

//Get task by index number
function getTask(index) {
	return tasks[index];
}

// List tasks
function listTasks() {
	var html = "";
	for (var i in tasks) {
		//console.log(tasks[i].text);
		var task = tasks[i];
		var text = task.text;
		var completed = task.completed;
		html += "<li>"+text+" "+completed+"</li>";
	}
	//id of ul.html = html;
}


/*
list maker app

-Click priority bar to cycle through three states of background color

-Click delete and the task slides to the left and fades out, removed from the array

-Click edit to change the text of the span. Span disappears, input box appears, input value is
	highlighted and is the same as the span text. When the focus is lost or enter key is pressed
	the input disappears and the span reappears with the input value as the text.

-Click on the plus button to add a new item to the list and array