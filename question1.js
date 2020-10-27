function customPrint(n, message) {
	console.log(message);
	--n && customPrint(n, message)
}

customPrint(5, "Hello, World!");