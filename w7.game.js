window.onload = pageLoad;

function pageLoad(){
	let start = document.getElementById("start")
	start.onclick = startGame
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	// var min = 0.5; // 0.5 minute
	let second = 31; 
	var x = document.getElementById('clock');
	let start = document.getElementById("start")
	//setting timer using setInterval function
	timer = setInterval(timeCount , TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second = second - 1;
		x.innerHTML = second;
		if(allbox.length == 0){
			alert("You win");
			clearInterval(timer);
			// timer = null;
			x.innerHTML = " ";
			clearScreen();
		}

		else if(second == 0){
			alert("Game over");
			clearInterval(timer);
			// timer = null;
			x.innerHTML = " ";
			clearScreen();
		}
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	let gameLayer = document.getElementById("game-layer");
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		gameLayer.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	let allbox = document.querySelectorAll("#game-layer div");
	let gameLayer = document.getElementById("game-layer");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		gameLayer.removeChild(allbox[i]);
	}
}




