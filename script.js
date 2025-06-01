window.onload = function(){
	
	let gameContainer =document.getElementById('game'); // контейнер гри
	let count = 0; // змінна лічильник (рахуєм кількість кліків)

	// Ініціалізація гри
	initGame();

	// Функція ініціалізація гри, створюємо 9 клітинок поля
	function initGame(){
		for (let i=0; i<9; i++) {
			gameContainer.innerHTML+='<div class="block"></div>';
		}
	}

	// Відслідковуємо кліки в контейнері game
	gameContainer.onclick = function(event){
		console.log(event);
		makeMove(event); // Робимо хід на вільній клітинці
	}

	// Робимо хід на вільній клітинці
	function makeMove(event){
		console.log("makeMove");
		let symbol = '';

		if (event.target.className === 'block'){
			if (count%2 == 0) 
				symbol = 'x';
			else 
				symbol = '0';
			
			event.target.innerHTML = symbol;
			
			if (count >= 3){
		        //checkWinner(); // перевірка переможця 
			}

		    count++; // збвльшуємо лічильник на 1
		}
	}

}
