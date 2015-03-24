//index.js

var taskItemTemplate;
var tasks = []
var numberOfTasks = 0;


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


$(document).on('ready',function(){

	buttonClick();

	var taskItemTemplateText = $('#task-item-template').html();
	taskItemTemplate = Handlebars.compile(taskItemTemplateText);


})
	