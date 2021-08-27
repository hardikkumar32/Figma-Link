window.onload = function () {
	let abc = document.querySelector(".Logos");
	let c = 0;
	document.querySelector(".vector2").addEventListener("click", () => {
		c = c + 100;
		abc.style.transform = `translate(${c}px)`;
	});

	document.querySelector(".vector").addEventListener("click", () => {
		c = c - 100;
		abc.style.transform = `translate(${c}px)`;
	});
};
