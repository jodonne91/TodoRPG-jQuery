var markCompleteButton = function(){
		$('.mark-complete-button').on('click', function(evt){
		//console.log(evt)

		var id = $(this).attr('id');
		$(this).parent().addClass('complete');
		
		_.each(tasks, function(task){
			if(task.id*1 === id*1){
				task.status = 'complete';
			}
		})

	})
}

var buttonClick = function(){

	$('.add-task-button').on('click', function(){
		var text = $('.new-task-input').val();
		// console.log(text);
		if(text){
			createTask(text);
			$('.new-task-input').val('');
			updateList();
		}
		else{
			alert('Task item cannot be blank')
		}
	});

}