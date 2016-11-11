
var counter1 = new Counter('.numCounter1');
var counter2 = new Counter('.numCounter2');

var stats_count = 0;

var current = -1;
var multiplier = 1;

function Counter(selector) {
	this.el	= $(selector);
	this.numbers = this.el.find('> b').toArray().reverse();
}

Counter.prototype.count = function(newVal){
	var reversedArr, className;
	// update instance's value
	this.value = newVal || this.el.attr('data-value')|0;
	 
	if( !this.value ) return;
	// convert value into an array of numbers
	reversedArr = (this.value+'').split('').reverse();

	// loop on each number element and change it
	this.numbers.forEach(function(item, i){ 
			setTimeout(function(){
					className = 'd' + (reversedArr[i]) || 0;
					//if( item.className != className)
					item.className = className;
			}, i * 250);
	})
}

function randomCount() {
	
	$("#numbers").fadeIn(300);


	var num1 = stats_number1[stats_count % 5];
	var num2 = stats_number2[stats_count % 5];

	if ((stats_number1[stats_count % 5]).toString().length == 2) {
		num1 = stats_number1[stats_count % 5] * 10;
		$(".numCounter1 b").eq(2).css("opacity", "0");
	} else {
		$(".numCounter1 b").eq(2).css("opacity", "1");
	}

	if ((stats_number2[stats_count % 5]).toString().length == 2) {
		num2 = stats_number2[stats_count % 5] * 10;
		$(".numCounter2 b").eq(2).css("opacity", "0");
	} else {
		$(".numCounter2 b").eq(2).css("opacity", "1");
	}

	counter1.count(num1);
	$("#stats-label1").fadeOut(400, function () {
		$("#stats-label1").html(stats_label1[(stats_count+1) % 5]);
	});
	$("#stats-label1").fadeIn(400);

	counter2.count(num2);
	$("#stats-label2").fadeOut(400, function () {
		$("#stats-label2").html(stats_label2[(stats_count+1) % 5]);
	});
	$("#stats-label2").fadeIn(400);



	stats_count = stats_count + 1;
	setTimeout(randomCount, 4000);

}

function randomNum(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
}


$(window).load(function () {
	setTimeout(randomCount, 2800);
});

