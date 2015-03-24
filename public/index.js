//index.js

var taskItemTemplate;
var tasks = []
var numberOfTasks = 0;

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

var createTask = function(name){
	numberOfTasks++;
	tasks.push({text: name, id:numberOfTasks, status: 'active'});
}

var updateList = function(){

	$('.tasks-list').html('');

	_.each(tasks,function(task){
		$('.tasks-list').append(taskItemTemplate(task));
	});

	markCompleteButton();

}

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

$(document).on('ready',function(){

	buttonClick();

	var taskItemTemplateText = $('#task-item-template').html();
	taskItemTemplate = Handlebars.compile(taskItemTemplateText);


})
	