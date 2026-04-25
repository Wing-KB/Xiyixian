radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            # # # # #
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
input.onSound(DetectedSound.Loud, function () {
    while (true) {
        basic.showString("Hello!")
        if (input.soundLevel() <= 129) {
            break;
        }
    }
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . # .
        . . # . .
        . . # . .
        `)
})
basic.showLeds(`
    . # # # .
    # . . . #
    . . . # .
    . . # . .
    . . # . .
    `)
basic.showIcon(IconNames.Sword)
basic.forever(function () {
    radio.setGroup(66)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        radio.sendNumber(1)
    }
})
