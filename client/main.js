function displayData() {
	fetch("http://localhost:8080/getcompanyceo")
		.then((res) => {
			// console.log(res);
			return res.json();
		})
		.then((json) => {
			const elem = document.querySelector("#container");
			elem.textContent = JSON.stringify(json);
		})
		.catch((error) => {
			console.log(error);
		});

	// .then((res) => res.json())
	// .then((json) => {
	// 	console.log(json);
	// 	const elem = document.querySelector("#container");
	// 	elem.textContent = JSON.stringify(json);
	// })
	// .catch((err) => console.log(err));
}

displayData();
