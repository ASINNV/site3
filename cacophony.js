// var butt = document.getElementById('button');
// butt.addEventListener('click', function () {
// 	var ball = document.getElementById('hidden');
// 	if (ball.style.display === 'none' || ball.style.display === '') {
// 		ball.style.display = 'block';
// 	} else {
// 		ball.style.display = "none";
// 	}
// });
$(document).ready(function () {
	$('#button').click(function () {
		$('#hidden').slideToggle(1000, function() {

		});
	});
	$('p').click(function () {
		$(this).css({position: 'relative', top: 150, left: 150});
		var top = parseFloat($(this).css('top'));
		var left = parseFloat($(this).css('left'));
		$(this).animate({
			top: -top*Math.random(),
			left: -left*Math.random()
		});

	});
});