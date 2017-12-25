
function User(name, surname) {
	this.name = name;
	this.surname = surname;
}

Student.prototype.constructor = Object.create(User.prototype);
function Student(name, surname, specialization) {
	User.apply(this, arguments);
	this.specialization=specialization;
}

Developer.prototype.constructor = Object.create(Student.prototype);
function Developer(name, surname, specialization, jobTitle) {
	Student.apply(this, arguments);
	this.jobTitle=jobTitle;
}

function SimpleTask (titleSimlpe, statusSimple){
	this.titleSimlpe = titleSimlpe;
	this.statusSimple = statusSimple;
	this.typeUser="user";
}

HomeTask.prototype.constructor = Object.create(SimpleTask.prototype);
function HomeTask(titleSimlpe, statusSimple, decskription) {
	SimpleTask.apply(this, arguments);
	this.decskription=decskription;
	this.typeUser="student";
}

ProjectTask.prototype.constructor = Object.create(HomeTask.prototype);
function ProjectTask(titleSimlpe, statusSimple, decskription, deadlineData) {
	HomeTask.apply(this, arguments);
	this.deadlineData=deadlineData;
	this.typeUser="developer";
}




