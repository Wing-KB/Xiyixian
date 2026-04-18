input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        . . . # .
        . . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
