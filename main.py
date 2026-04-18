def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_sound_loud():
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def Wait():
    while True:
        if input.temperature() <30:
            return 0

def on_sound_quiet():
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        """)
input.on_sound(DetectedSound.QUIET, on_sound_quiet)

def on_forever():
    if input.temperature() >= 30:
        radio.set_group(1)
        radio.send_string("hot")
        if not (input.temperature() >= 30):
            Wait()
basic.forever(on_forever)

def on_forever2():
    if input.logo_is_pressed():
        basic.show_leds("""
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            """)
basic.forever(on_forever2)
