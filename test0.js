let CALC = new Object

function set_CALC() {
    clear_btn = document.getElementById('clear_btn')
    CALC.screen = document.getElementById('screen')
    CALC.enter_btn = document.getElementById('enter_btn')
    CALC.clear_btn = document.getElementById('clear_btn')
    CALC.ADD = document.getElementById('ADD')
    CALC.SUBTRACT = document.getElementById('SUBTRACT')
    CALC.MULTIPLY = document.getElementById('MULTIPLY')
    CALC.DIVIDE = document.getElementById('DIVIDE')
    CALC.CURRENT = ''  
    clear_btn.addEventListener('click', clear)
   

    

}
function add_btnListeners() {
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')
    let five = document.getElementById('five')
    let six = document.getElementById('six')
    let seven = document.getElementById('seven')
    let eight = document.getElementById('eight')
    let nine = document.getElementById('nine')
    let fcurl = document.getElementById('frontcurl')
    let zero = document.getElementById('zero')
    let bcurl = document.getElementById('backcurl')
    let addition = document.getElementById('ADD')
    let subtraction = document.getElementById('SUBTRACT')
    let multiplication = document.getElementById('MULTIPLY')
    let division = document.getElementById('DIVIDE')
    one.addEventListener('click', () => {
        btn_press('1')
    })
    two.addEventListener('click', () => {
        btn_press('2')
    })
    three.addEventListener('click', () => {
        btn_press('3')
    })
    four.addEventListener('click', () => {
        btn_press('4')
    })
    five.addEventListener('click', () => {
        btn_press('5')
    })
    six.addEventListener('click', () => {
        btn_press('6')
    })
    seven.addEventListener('click', () => {
        btn_press('7')
    })
    eight.addEventListener('click', () => {
        btn_press('8')
    })
    nine.addEventListener('click', () => {
        btn_press('9')
    })
    fcurl.addEventListener('click', () => {
        btn_press('(')
    })
    bcurl.addEventListener('click', () => {
        btn_press(')')
    })
    zero.addEventListener('click', () => {
        btn_press('0')
    })
    addition.addEventListener('click', () => {
        btn_press('+')
    })
    subtraction.addEventListener('click', () => {
        btn_press('-')
    })
    multiplication.addEventListener('click', () => {
        btn_press('*')
    })
    division.addEventListener('click', () => {
        btn_press('/')
    })

}

function btn_press(exp) {
    
    let current = CALC.CURRENT 
    let newexp = current + exp    
    let operators = ['+', '-', '*', '/']
    let valid = true
    if (exp != 'CLEAR' && exp != 'ENTER') {
        if (current.length == 15 && operators.includes(exp)) {
            //console.log('can not add operator add the end of string')
            valid = false
        }
        if (newexp.length <= 16 && valid) {
            CALC.CURRENT = newexp;
        }
    }
    newCurrent = CALC.CURRENT
    display_math(newCurrent)
}

function back() {
    let current = CALC.CURRENT
    let backspace = false
    

    if (current.length >= 1) {
        CALC.CURRENT = CALC.CURRENT.slice(0, -1)
        backspace = true
    }
   
    if (backspace) {
        let newCurrent = CALC.CURRENT        
        display_math(newCurrent)
    }
   
}


function display_math(maths) {
    let screen = CALC.screen;    
    screen.innerHTML = maths;
}


function clear() {
    
    CALC.CURRENT = '';
    let screen = CALC.screen;
    screen.innerHTML = '';
}

function calculate() {
    let maths = CALC.CURRENT
    try {
        let answer = eval(maths);       
        let screen = CALC.screen;
        screen.innerHTML = answer.toString();
        CALC.CURRENT = answer.toString();
    }
    catch (error) {
        let screen = CALC.screen
        screen.innerHTML = "INVALID Maths"
    }
}


window.addEventListener('load', (event) => {
    set_CALC()
    add_btnListeners()
});
