
function visitLink(path) {
	const pathKey1 = 'Page1';
	const pathKey2 = 'Page2';
	const pathKey3 = 'Page3';


	switch (path) {
		case pathKey1: {
			let count1 = +localStorage.getItem(pathKey1);
			count1++;
			localStorage.setItem(pathKey1, count1);
			break;
		}
		case pathKey2: {
			let count2 = +localStorage.getItem(pathKey2)
			count2++;
			localStorage.setItem(pathKey2, count2);
			break;
		}
		case pathKey3: {
			let count3 = +localStorage.getItem(pathKey3)
			count3++;
			localStorage.setItem(pathKey3, count3);
			break;
		}
		default: {
			break;
		}
	}
}

function viewResults() {
	const content = document.getElementById('content');
	for (let i = 0; i < localStorage.length; i++) {
		let itemKey = localStorage.key(i);
		let itemValue = localStorage.getItem(localStorage.key(i));
		let li = document.createElement('li');
		content.after(li);
		li.innerText = `You visited ${itemKey}: ${itemValue} times`;
	}
	localStorage.clear();
}
