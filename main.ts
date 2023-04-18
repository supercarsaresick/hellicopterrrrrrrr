input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    wuKong.stopMotor(wuKong.MotorList.M2)
})
