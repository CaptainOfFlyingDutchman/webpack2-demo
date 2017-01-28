import _ from 'lodash';

function component() {
	var div = document.createElement('div');
	div.innerHTML = _.join(['Hello', 'Webpack 2'], ' '); // Implicit dependency to lodash
	return div;
}

document.body.appendChild(component());

/* Using the Person class */

import Person from './Person';

const person = new Person('Foo', 'Bar');
person.age = 18;

console.log(person.introduce);
