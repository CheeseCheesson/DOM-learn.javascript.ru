let area = document.getElementById("area");
let cell = document.getElementsByClassName("cell");
let currentPlayer = document.getElementById("curPlyr");

let player = "x";
// статистика игры
let stat = {
  x: 0,
  o: 0,
  d: 0,
};
// массив с правильнфыми ответами
let winIndex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// отрисовка игрового поля
for (let i = 1; i <= 9; i++) {
  area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

// при нажатии на поле, вывываем функцию cellClick
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", cellClick, false);
}




function cellClick() {
    // функция cellClick создаёт пустой массив
  let data = [];

  if (!this.innerHTML) {
    //если в cell[i].innerText не будет X, записываем туда X или O
    this.innerHTML = player;
  } else {
    // в противном случае - ячейка занята
    alert("Ячейка занята");
    return;
  }
  //
  for (let i in cell) {
    if (cell[i].innerHTML == player) {
        // console.log(cell[i]);
        // если клетка содержит X или O, то в data[] записываем позицию
        // из атребута позиция. Она вернет цифру

       data.push(parseInt(cell[i].getAttribute("pos")));      
    }
  }

  //меняем игрока после каждого хода

  //проверяем текущие положение игрока с выигрышными положениями
  //запускаем функцию checkWin и если она возвращем true, то запускаем проверку
  if (checkWin(data)) {
      // при виигрыше X или O - записываем результат в поле stat.x или stat.o
    stat[player] += 1;
    // очищаем поля, кроме stat, начинаем игру заново
    restart("Выиграл " + player);
  } else {
      // создаём флаг заполненного поля, если нет выигрышной комбинации
    let draw = true;
    for (let i in cell) {
        // если всё ещё есть пустые клетки, то  draw = false
      if (cell[i].innerHTML == "") draw = false;
    }
    if (draw) {
        //если все клетки заполнены, но  нет выигрышной комбинации,
        //то объявляем ничью
        //записываем в статистику 
      stat.d += 1;
      //очищаем поля игры
      restart("Ничья");
    }
  }
  // при каждом клике меняем значение player
  player = player == "x" ? "o" : "x";
  // в отдельный див записываем текущее значение player
  currentPlayer.innerHTML = player.toUpperCase();
}
// проверяем победителя, принимаем массив data из  if (checkWin(data)){}
function checkWin(data) {
    // ходим по массиву с выигрышными комбинациями
    /* winIndex = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8],
                    [3, 6, 9],  [1, 5, 9],  [3, 5, 7]
                ]; */
  for (let i in winIndex) {
      //создаём флаг победителя
    let win = true;
    // идём по каждому индексу вложенного подмассива
    for (let j in winIndex[i]) {
      // в id сохраняем все наши выигрышные комбинации
      let id = winIndex[i][j];
      // в ind сохраняет рузельтат 
      let ind = data.indexOf(id);

        // если результат поиска индекса в data -1
      if (ind == -1) {
          // то ставитм win false
        win = false;
      }
    }
    // если после проверки win не стал false, то возвращаем true
    if (win) return true;
  }
  return false;
}

function restart(text) {
  alert(text);
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
  }
  updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}
