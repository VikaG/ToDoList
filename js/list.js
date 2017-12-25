
$(document).ready(function(){
	$('#addTaskSimple').on('click', function(){
		var id = $('#select').val();
        var toAddTitle = $('#inputTitleSimple').val();
		var toAddStatus = $('#inputStatusSimple').val();
		
		if(toAddTitle !='' && toAddStatus!=''){
			$('ol').prepend('<li>' + id + '; TYPE: simple; TITLE: ' + toAddTitle 
			+ '; STATUS: ' + toAddStatus + '</li>');
		
			$('.reset').val('');}
        });
	}
);

$(document).ready(function(){
    $('#addTaskHome').on('click', function(){
		var id = $('#select').val();
		if(id === 'student' ||id === 'developer'){			
            var toAddTitle = $('#inputTitleHome').val();
			var toAddStatus = $('#inputStatusHome').val();
			var toAddDescription = $('#descriptionHome').val();
			if(toAddTitle !='' && toAddStatus!='' && toAddDescription!=''){
				$('ol').prepend('<li>' + id + '; TYPE: home; TITLE: ' + toAddTitle + '; STATUS: ' + toAddStatus +
				'; DESCRIPTION: ' + toAddDescription + '</li>');

				$('.reset').val('');
			}
        }
	});
});

$(document).ready(function(){
    $('#addTaskProject').on('click',function(){
		var id = $('#select').val();
		if (id === 'developer') {
		    var toAddTitle = $('#inputTitleProject').val();
			var toAddStatus = $('#inputStatusProject').val();
			var toAddDescription = $('#descriptionProject').val();
			var toAddDeadline = $('#inputDeadlineDateProject').val();
			if(toAddTitle !='' && toAddStatus!='' && toAddDescription!=''
				&& toAddDeadline!=''){
				$('ol').prepend('<li>' + id + '; TYPE: project; TITLE: ' + toAddTitle + '; STATUS: ' + toAddStatus +
				 '; DESCRIPTION: ' + toAddDescription + '; DEADLINE DATA: ' + toAddDeadline + '</li>');
				$('.reset').val('');
			}
		}
	});
});

