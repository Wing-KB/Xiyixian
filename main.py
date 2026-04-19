def on_received_number(receivedNumber):
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(500)
    basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        """)
    basic.show_icon(IconNames.SILLY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.SWORD)
    basic.show_icon(IconNames.SILLY)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_sound_loud():
    basic.show_string("Hello!")
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_sound_quiet():
    basic.show_leds("""
        . # # # .
        # . . . #
        . . . # .
        . . # . .
        . . # . .
        """)
input.on_sound(DetectedSound.QUIET, on_sound_quiet)

basic.show_leds("""
    . # # # .
    # . . . #
    . . . # .
    . . # . .
    . . # . .
    """)
basic.show_icon(IconNames.SWORD)

def on_forever():
    radio.set_group(66)
basic.forever(on_forever)
