//index.js

var taskItemTemplate;
var tasks = []

var buttonClick = function(){

	$('.add-task-button').on('click', function(){
		var text = $('.new-task-input').val();
		// console.log(text);
		createTask(text);
		$('.new-task-input').val('');
		updateList();
	})

}

var createTask = function(name){
	tasks.push({text: name});
}

var updateList = function(){

	$('.tasks-list').html('')
	_.each(tasks,function(task){
		$('.tasks-list').append(taskItemTemplate(task));
	});

	$('.mark-complete-button').on('click', function(evt){
		console.log(evt)
		evt.currentTarget.parentElement.remove();
	})

}

$(document).on('ready',function(){

	buttonClick();

	var taskItemTemplateText = $('#task-item-template').html();
	taskItemTemplate = Handlebars.compile(taskItemTemplateText);


})
	