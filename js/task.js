function Clouse(){
		$('#Simple').tab('show');
		$('.reset').val('');
}	
function UnavailableHomeTask() {
	var id = document.getElementById('select').value;
	if(id === 'user'){
	alert("Unavailable");
	}
}
function UnavailableProjectTask() {
	var id = document.getElementById('select').value;
	if(id === 'student' || id === 'user'){
		alert("Unavailable");
	}
}

function ButtonClickTaskSimpl() {
	var id = document.getElementById('select').value;
	var titleSimple = document.getElementById('inputTitleSimple').value;
    var statusSimple = document.getElementById('inputStatusSimple').value;
		
	if(titleSimple === '' || statusSimple === ''){
		alert("Fill in the forms");
	} 
	else {
		var simpleTask = new SimpleTask(titleSimple, statusSimple);
		simpleTask.typeUser = id;
		console.log(simpleTask);
	}
}

function ButtonClickTaskHome() {
	var id = document.getElementById('select').value;
	var titleHome = document.getElementById('inputTitleHome').value;
    var statusHome = document.getElementById('inputStatusHome').value;
	var descriptionHome = document.getElementById('descriptionHome').value;
		
	if(id === 'user'){
		alert("Unavailable");
	} 
	else{
		if(titleHome === '' || statusHome === '' || descriptionHome === ''){
			alert("Fill in the forms");
		} 
		else {
			var homeTask = new HomeTask(titleHome, statusHome, descriptionHome);
			homeTask.typeUser=id;
			console.log(homeTask);
			$('#Simple').tab('show');
		}
	}		
}

function ButtonClickTaskProject() {
	var id = document.getElementById('select').value;
	var titleProject = document.getElementById('inputTitleProject').value;
    var statusProject = document.getElementById('inputStatusProject').value;
	var descriptionProject = document.getElementById('descriptionProject').value;
    var deadlineProject = document.getElementById('inputDeadlineDateProject').value;
		
	if(id === 'user'  || id === 'student'){
		alert("Unavailable");
	} 
	else{
		if(titleProject === '' || statusProject === '' || descriptionProject === '' || deadlineProject ===''){
			alert("Fill in the forms");
		}
		else {
			var projectTask = new ProjectTask(titleProject, statusProject, descriptionProject, deadlineProject);
			console.log(projectTask);
			$('#Simple').tab('show');
		}
	}
}
