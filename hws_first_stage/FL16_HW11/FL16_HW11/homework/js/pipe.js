const pipe = (value, ...funcs) => {
	const result = funcs.reduce((acc, fn, index) => {
		if (typeof func === 'function') {
			return fn(acc);
		} else {
			return `Provided argument at position ${index} is not a function!`;
		}
	}, value);
	return result;
};

const replaceUnderscoreWithSpace = (value) => {
	console.log(value);
	return value.replace(/_/g, ' ');
}
const capitalize = (value) => {
	console.log(value);
	return value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
}
const appendGreeting = (value) => {
	console.log(value);
	return `Hello, ${value}!`
};

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error);

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result);
