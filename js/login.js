function ButtonClickLogin() {
	var id = document.getElementById("select").value;
	var name = document.getElementById("inputFirstName").value;
    var surname = document.getElementById("inputLastName").value;
    var specialization = document.getElementById("inputSpecialization").value;
    var jobTitle = document.getElementById("inputJobTitle").value;
		
	if(id === 'user'){
		if(name === '' || surname === ''){
			alert("Fill in the forms");
		}
		else{	
			var user = new User(name, surname);
			$('#addlogin').prop('disabled',true);
			console.log(user);
			$('.reset').val('');
		}	
	}

	if(id === 'student'){
		if(name === '' || surname === '' || specialization === ''){
			alert("Fill in the forms");
		}
		else{
			var student = new Student(name, surname, specialization);
			console.log(student);
			$('#addlogin').prop('disabled',true);
			$('.reset').val('');
		}
	}
	
	if(id === 'developer'){
		if(name === '' || surname === '' || specialization === '' || jobTitle === ''){
			alert("Fill in the forms");
		}
		else{
			var developer = new Developer(name, surname, specialization, jobTitle);
			console.log(developer);
			$('#addlogin').prop('disabled',true);
			$('.reset').val('');
		}
	}
}	

