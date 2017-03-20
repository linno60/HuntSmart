$(document).ready(function () {
	// Validating Form Fields.....
	$("#submit").click(function (e) {
		var email = $("#email").val();
		var name = $("#name").val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (email === '') {
			alert("Please fill all fields...!!!!!!");
			e.preventDefault();
		} else if (!(email).match(emailReg)) {
			alert("Invalid Email...!!!!!!");
			e.preventDefault();
		} else {
			alert("Form Submitted Successfully......");
		}
	});
	console.log("ready!");
	$("#loginButton").click(function () {
		var email = $('#exampleInputEmail2').val();
		var pass = $('#exampleInputPassword2').val();
		if (email == "a@a.com" && pass == "123") {
			window.location.href = "index_l.html";
		}
		else {
			//alert("no correct info");
			$('#errorMessage').text("In Correct Info,Please Try Again");
			$('#errorMessage').css({ "font-size": "120%", "color": "red" });
		}
	});

	var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});