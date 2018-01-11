function ButtonClickLogin() {
	var id = document.getElementById("select").value;
	
	var inputValue = ['name', 'surname', 'specialization', 'jobTitle'];
	
	var selected ={
		user: '.for-user',
		student: '.for-student',
		developer: '.for-developer'
	}
	var inputs = $("#login").find(selected[id]);
	var valid = true;
	$.each(inputs, function(i, item) {
		if(!$(item).val()) {
			valid = false; 
			$(item).addClass("error"); 
		}
		else {$(item).removeClass("error");
		}
	});
	
	if (!valid)	alert("Fill in the forms");
	else{
		var valueData = {};
		for (var i in inputValue){
			var value = $('#'+inputValue[i]).val();
		if(value) {
		valueData[inputValue[i]] = value;	}
		}
	

		switch(id){
		case "user":{
			var user = new User(valueData);
			console.log(user);
			break;
		}
		case "student":{
			var student = new Student(valueData);
			console.log(student);
			break;
		}	
		case "developer":{
			var developer = new Developer(valueData);
			console.log(developer);
			break;
		}	
			
		}			
	$('.reset').val('');	
	$('#addlogin').prop('disabled',true);		
	}
}	
	
