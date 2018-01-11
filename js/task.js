
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
	
	if(titleSimple && statusSimple ){
		var simpleTask = new SimpleTask(titleSimple, statusSimple);
		simpleTask.typeUser = id;
		console.log(simpleTask);
		
		$('ol').prepend("<li><span><i class='fa fa-trash'></i></span>" + 
		id + '; TYPE: simple; TITLE: ' + titleSimple 
			+ '; STATUS: ' + statusSimple + '</li>');
		
		$('.reset').val('');
		
	}else alert("Fill in the forms");
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
		if(titleHome && statusHome && descriptionHome){
			
			var homeTask = new HomeTask(titleHome, statusHome, descriptionHome);
			homeTask.typeUser=id;
			console.log(homeTask);
			$('#Simple').tab('show');
			$('ol').prepend("<li><span><i class='fa fa-trash'></i></span>" + 
			id + '; TYPE: home; TITLE: ' + titleHome + '; STATUS: ' + statusHome +
				'; DESCRIPTION: ' + descriptionHome + '</li>');

			$('.reset').val('');
		}else alert("Fill in the forms");
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
		if(titleProject && statusProject && descriptionProject && deadlineProject ){
			
			var projectTask = new ProjectTask(titleProject, statusProject, descriptionProject, deadlineProject);
			console.log(projectTask);
			$('#Simple').tab('show');
			$('ol').prepend("<li><span><i class='fa fa-trash'></i></span>" + id 
			+ '; TYPE: project; TITLE: ' + titleProject + '; STATUS: ' + statusProject +
				 '; DESCRIPTION: ' + descriptionProject + '; DEADLINE DATA: ' + deadlineProject + '</li>');
			$('.reset').val('');
		}else alert("Fill in the forms");
	}
}

$('ol').on('click', '.fa-trash', function(e) {
    $(this).parents('li').remove();
});
