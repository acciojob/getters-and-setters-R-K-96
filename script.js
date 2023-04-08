//complete this code
class Person {
	constructor(name){
	this.name = name;
		
	}
	get name()
	{
		return this.name;
	}

	set age(age)
	{
		this.age = age;
	}
	
}

class Student extends Person {

	study()
	{
		console.log(name() +" is studying");
	}
}

class Teacher extends Person {

	teach(){
		console.log(name()+" is teaching");
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
