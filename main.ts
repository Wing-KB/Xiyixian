radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . # # #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(53)
})
basic.forever(function () {
    radio.setGroup(66)
})
