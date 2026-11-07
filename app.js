/*-------------------------------- Constants --------------------------------*/
const winningGroups = [
    [0, 1, 3],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ]
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll('.sqr')
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

