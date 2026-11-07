/*-------------------------------- Constants --------------------------------*/
const winningGroups = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll('.sqr')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/
const render = () => {
    board.forEach((square, index) => {
        squares[index].textContent = square
    })
    if (winner){
        message.textContent = `${turn} is the Winner!`
    } else if (tie){
        message.textContent = 'Its a Tie!'
    } else {
        message.textContent = `Its ${turn}'s turn!`
    }
}
render()

const handleClick = (event) => {
    const index = event.target.id

    if (board[index] !== ''){
        return
    }
    if (winner || tie) {
        return
    }

    board[index] = turn
    checkWinner()
    checkTie()
    if (!winner && !tie){
        if (turn === 'X'){
            turn = 'O'
        } else {
            turn = 'X'
        }
    }
    render()
}

const checkWinner = () => {
    winningGroups.forEach((group) => {
        if (
            board[group[0]] !== '' &&
            board[group[0]] === board[group[1]] &&
            board[group[0]] === board[group[2]]
        ){
            winner = true
        }
    })
}
const checkTie = () => {
    if (winner) {
        return
    }
    let emptyStrings = 0
    board.forEach((square) => {
        if (square === '')  {
            emptyStrings++
        }
    })
    if (emptyStrings === 0){
        tie = true
    }
}
const reset = () => {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false
    render ()
    }

/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
    square.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', reset)