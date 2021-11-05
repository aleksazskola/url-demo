input.onButtonPressed(Button.A, function () {
    url = "" + url + "A"
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "mystery") {
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (receivedString == "paris") {
        music.playMelody("G F G A - F E D ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    url = "" + url + "B"
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(100)
    radio.sendString(url)
})
let url = ""
url = ""
basic.forever(function () {
    radio.setGroup(101)
    scrollbit.scrollText(url, 128, 50)
})
