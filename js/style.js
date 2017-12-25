document.getElementById('select').addEventListener('change', function(){

	switch(this.value){
		case "user":{
			$('#inputFirstName').prop('disabled',false);
			$('#inputLastName').prop('disabled',false);
			$('#inputJobTitle').prop('disabled',true);
			$('#inputSpecialization').prop('disabled',true);
			$('#inputTitleSimple').prop('disabled',false);
			$('#inputStatusSimple').prop('disabled',false);
			$('#Home').on('click', function(e) {return false;});
			$('#Project').on('click', function(e) {return false;});
			break;
		}
		case "student":{
			$('#inputFirstName').prop('disabled',false);
			$('#inputLastName').prop('disabled',false);
			$('#inputJobTitle').prop('disabled',true);
			$('#inputSpecialization').prop('disabled',false);
			$('#inputTitleSimple').prop('disabled',false);
			$('#inputStatusSimple').prop('disabled',false);
			$('#inputTitleHome').prop('disabled',false);
			$('#inputStatusHome').prop('disabled',false);
			$('#descriptionHome').prop('disabled',false);
			$("#Home").off('click');
			$('#Project').on('click', function(e) {return false;});
			break;
		}
		case "developer":{
			$('#inputFirstName').prop('disabled',false);
			$('#inputLastName').prop('disabled',false);
			$('#inputJobTitle').prop('disabled',false);
			$('#inputSpecialization').prop('disabled',false);
			$('#inputTitleSimple').prop('disabled',false);
			$('#inputStatusSimple').prop('disabled',false);
			$('#inputTitleHome').prop('disabled',false);
			$('#inputStatusHome').prop('disabled',false);
			$('#descriptionHome').prop('disabled',false);
			$('#inputTitleProject').prop('disabled',false);
			$('#inputStatusProject').prop('disabled',false);
			$('#descriptionProject').prop('disabled',false);		
			$('#inputDeadlineDateProject').prop('disabled',false);	
			$("#Home").off('click');
			$('#Project').off('click');		
			break;
		}
		default:{
			$('#inputFirstName').prop('disabled',true);
			$('#inputLastName').prop('disabled',true);
			$('#inputJobTitle').prop('disabled',true);
			$('#inputSpecialization').prop('disabled',true); 
			$('#inputTitleSimple').prop('disabled',true);
			$('#inputStatusSimple').prop('disabled',true);
			$('#inputTitleHome').prop('disabled',true);
			$('#inputStatusHome').prop('disabled',true);
			$('#descriptionHome').prop('disabled',true);
			$('#inputTitleProject').prop('disabled',true);
			$('#inputStatusProject').prop('disabled',true);
			$('#descriptionProject').prop('disabled',true);		
			$('#inputDeadlineDateProject').prop('disabled',true);
			$("#Home").off('click');
			$('#Project').off('click');		
			break;
		}
	}
});
