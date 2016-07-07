var listName = {

	init: function() {
		this.cacheDom();
	},
	cacheDom: function() {
		console.log(this);
		this.el = document.getElementById('listName');
		this.input = this.el.nextSibiling;

	},
	editMode: function() {
		listName.className = "hidden";
		nameInput.className = "list-name__input";
		nameInput.focus();
		nameInput.setSelectionRange(0, nameInput.value.length);
	},
	render: function() {

		if (nameInput.innerHTML === "") {
			listName.innerHTML = "To do:";
		} else {
			listName.innerHTML = nameInput.value;
		}

		listName.className = "list-name";
		nameInput.className = "hidden";
	},
	enterUpdate: function(event) {
		if (event.which === 13) {
			this.render();
		};
	}
};

listName.init();

var items = {
	items: [],
};

//Edit list name - Enter name into textbox after clicking and update heading with value
	//display nameInput with focus and hide className
	function edit_name() {
		//var listName = document.getElementById('listName');
		//var nameInput = document.getElementById('nameInput');

		listName.className = "hidden";
		nameInput.className = "list-name__input";
		nameInput.focus();
		nameInput.setSelectionRange(0, nameInput.value.length);
	}

	//update listName value to nameInput value and switch places when focus is lost
	function update_name() {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		if (nameInput.innerHTML === "") {
			listName.innerHTML = "To do:";
		} else {
			listName.innerHTML = nameInput.value;
		}

		listName.className = "list-name";
		nameInput.className = "hidden";
	}

	//update listName value to nameInput value and switch places when enter is pressed
	function enter_keypress(event) {
		var listName = document.getElementById('listName');
		var nameInput = document.getElementById('nameInput');

		if (event.which === 13) {
			if (nameInput.innerHTML === "") {
				listName.innerHTML = "To do:";
			} else {
				listName.innerHTML = nameInput.value;
			}

			listName.className = "list-name";
			nameInput.className = "hidden";
		}
	}
