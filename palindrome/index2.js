function show() {
	const num = document.getElementById("num").value;
	var len = num.length - 1;
	for (var i = 0; i <= len; i++) {
		if (num.charAt(i) !== num.charAt(len - i)) {
			document.getElementById("result").innerHTML = "Not a palindrome";
			return false;
		}
	}
	document.getElementById("result").innerHTML = "It is a palindrome";
	return true;
}
