/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let isGameOver = false
let moveCount = 0


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')
const resetBtn = document.querySelector('#reset')



/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `its ${currentPlayer} turn`



/*----------------------------- Event Listeners -----------------------------*/
sqr0El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr0El.textContent !== ''){
        return
    } else {
    sqr0El.textContent = currentPlayer
     if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
   
})
sqr1El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr1El.textContent !== ''){
        return
    } else {
    sqr1El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr2El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr2El.textContent !== ''){
        return
    } else {
    sqr2El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr3El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr3El.textContent !== ''){
        return
    } else {
    sqr3El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr4El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr4El.textContent !== ''){
        return
    } else {
    sqr4El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr5El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr5El.textContent !== ''){
        return
    } else {
    sqr5El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr6El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr6El.textContent !== ''){
        return
    } else {
    sqr6El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr7El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr7El.textContent !== ''){
        return
    } else {
    sqr7El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
sqr8El.addEventListener('click', () => {
    if (isGameOver === true){
        return
    }
    if (sqr8El.textContent !== ''){
        return
    } else {
    sqr8El.textContent = currentPlayer
    if (
  (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
    if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else {
    currentPlayer = 'X'
}
messageEl.textContent = `its ${currentPlayer} turn`
    }
})
resetBtn.addEventListener('click', () => {
     currentPlayer = 'X'
     isGameOver = false
     messageEl.textContent = `its ${currentPlayer} turn!`
     sqr0El.textContent = ''
     sqr1El.textContent = ''
     sqr2El.textContent = ''
     sqr3El.textContent = ''
     sqr4El.textContent = ''
     sqr5El.textContent = ''
     sqr6El.textContent = ''
     sqr7El.textContent = ''
     sqr8El.textContent = ''
})