function component() {
	var div = document.createElement('div');
	div.innerHTML = _.join(['Hello', 'Webpack 2'], ' '); // Implicit dependency to lodash
	return div;
}

document.body.appendChild(component());
