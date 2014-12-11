var butt = document.getElementById('button');
butt.addEventListener('click', function () {
	var ball = document.getElementById('hidden');
	if (ball.style.display === 'none') {
		ball.style.display = 'block';
	} else {
		ball.style.display = "none";
	}
});