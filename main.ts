let a = 0
let c = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 12)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    c = a * b
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 12)
    basic.showNumber(b)
})
basic.forever(function () {
	
})
