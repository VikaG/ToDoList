document.getElementById('select').addEventListener('change', function(){

	switch(this.value){
		case "user":{
			$('.for-developer').prop('disabled',true);
			$('.for-user').prop('disabled',false);
			$('#Home').on('click', function(e) {return false;});
			$('#Project').on('click', function(e) {return false;});
			break;
		}
		case "student":{
			$('.for-developer').prop('disabled',true);
			$('.for-student').prop('disabled',false);
			$("#Home").off('click');
			$('#Project').on('click', function(e) {return false;});
			break;
		}
		case "developer":{
			$('.for-developer').prop('disabled',false);
			$("#Home").off('click');
			$('#Project').off('click');		
			break;
		}
		default:{
			$('.for-developer').prop('disabled',true);
			$("#Home").off('click');
			$('#Project').off('click');		
			break;
		}
	}
});
