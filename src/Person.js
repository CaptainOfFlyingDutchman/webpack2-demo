export default class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = 0;
	}

	get introduce() {
		return `Hi I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
	}
}
