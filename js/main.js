let bodyColor = document.querySelector('body');
let btn = document.querySelector('.colorBtn');
let hex = document.querySelector('.hex');
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D' ,'E' ,'F'];

function hetHexColors() {

	let hexColors = '#';
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * hexNumbers.length);
		hexColors += hexNumbers[random];
	}
	bodyColor.style.backgroundColor = hexColors;
	hex.innerHTML = hexColors;
}

btn.addEventListener('click', hetHexColors);

