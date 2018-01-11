function User(config) {
	this.name = config.name;
	this.surname = config.surname;
}
function Student(config) {
	User.call(this, config);
	this.specialization=config.specialization;
}
Student.prototype.constructor = Object.create(User.prototype);

function Developer(config) {
	Student.call(this, config);
	this.JobTitle=config.jobTitle;
}
Developer.prototype.constructor = Object.create(Student.prototype);



function SimpleTask (titleSimlpe, statusSimple){
	this.titleSimlpe = titleSimlpe;
	this.statusSimple = statusSimple;
	this.typeUser="user";
}


function HomeTask(titleSimlpe, statusSimple, decskription) {
	SimpleTask.apply(this, arguments);
	this.decskription=decskription;
	this.typeUser="student";
}
HomeTask.prototype.constructor = Object.create(SimpleTask.prototype);

function ProjectTask(titleSimlpe, statusSimple, decskription, deadlineData) {
	HomeTask.apply(this, arguments);
	this.deadlineData=deadlineData;
	this.typeUser="developer";
}
ProjectTask.prototype.constructor = Object.create(HomeTask.prototype);

