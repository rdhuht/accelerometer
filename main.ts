/**
 * from microbit import *
 * 
 * REFRESH = 50
 * 
 * def get_data():
 * 
 *     x, y, z = accelerometer.get_x(), accelerometer.get_y(), accelerometer.get_z()
 * 
 *     a, b = button_a.was_pressed(), button_b.was_pressed()
 * 
 *     print((x, y, z))
 * 
 * def run():
 * 
 *     while True:
 * 
 *         sleep(REFRESH)
 * 
 *         get_data()
 * 
 * display.show('M')
 * 
 * run()
 */
basic.forever(function () {
    basic.pause(100)
    serial.writeLine("" + input.acceleration(Dimension.X) + " " + input.acceleration(Dimension.Y) + " " + input.acceleration(Dimension.Z) + " " + input.buttonIsPressed(Button.A) + " " + input.buttonIsPressed(Button.B))
})
