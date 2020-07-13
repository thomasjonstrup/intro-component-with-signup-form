const form = document.getElementById('form');

function checkInputs () {
	const firstname = document.getElementById('firstname');
	const lastname = document.getElementById("lastname");
	const email = document.getElementById("email");
	const password = document.getElementById("password");

	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(firstnameValue === '') {
		setError(firstname, 'First Name cannot be empty');
	} else {
		setSuccess(firstname);
	}
	if (lastnameValue === "") {
		setError(lastname, "Last Name cannot be empty");
	} else {
		setSuccess(lastname);
	}
	if (emailValue === "") {
		setError(email, "Email cannot be empty");
	} else if (!isEmail(emailValue)) {
		setError(email, "Looks like this is not an email");
	} else {
		setSuccess(email);
	}
	if (passwordValue === "") {
		setError(password, "Password cannot be empty");
	} else {
		setSuccess(password);
	}
}

function setError(input, message) {
	const el = document.createElement("span");

	input.classList.add('input__error');
	input.parentElement.classList.add('form__control__error');

	const child = input.parentElement.lastElementChild;

	console.log("tagName :>> ", child.tagName);

	if(child.tagName === 'SPAN') {
		input.parentElement.parentNode.removeChild(child);
	}

	el.innerHTML = message;
	insertAfter(input, el);
}

function setSuccess(input) {
	input.classList.remove("input__error");
	input.parentElement.classList.remove("form__control__error");

	const child = input.parentElement.lastElementChild;

	if (child.tagName === "SPAN") {
		child.innerHTML = '';
	}
}

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

form.addEventListener('submit', function (event) {
	event.preventDefault();

	checkInputs();
})