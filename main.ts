input.onButtonPressed(Button.A, function () {
    url = "" + url + "A"
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(url)
})
input.onButtonPressed(Button.B, function () {
    url = "" + url + "B"
})
let url = ""
url = ""
radio.setGroup(101)
basic.forever(function () {
	
})
