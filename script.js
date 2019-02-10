let start = document.getElementById("start");
let end = document.getElementById("end");
let fuel = document.getElementById("fuel");
let btn = document.getElementById("startbtn");
let volume = document.getElementById("volume");
btn.onclick = function() {
	let consumption = ((end.value - start.value)*0.14).toFixed(2); //расход
	let mileage = (end.value - start.value); //пробег
	let left1 = volume.value - fuel.value; //остаток топлива (выезд)
	let left2 = volume.value - consumption; //остаток топлива (возвращение)
	document.getElementById("result").innerHTML = 
	"Пробег: " + "<span>" + mileage + "</span>" + "</br>" +
	"Расход: " + "<span>" + consumption + "</span>" + "</br>" + "<hr>" +
	"Остаток топлива" + "</br> " + "<span> •</span> выезд: " + "<span>" + left1 + "</span>" + "</br>" + 
	"<span> •</span> возвращение: " + "<span>" + left2 + "</span>";
	$("html, body").animate({ scrollTop: $(document).height() }, "slow"); //прокрутка страницы вниз
};
