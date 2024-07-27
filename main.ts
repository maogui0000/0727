basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) >= 10 || sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) < 5) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(65, 70)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(25, -25)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(-25, 25)
        } else {
            cuteBot.motors(-30, -30)
        }
    } else {
        basic.pause(20)
        if (sonar.ping(
        DigitalPin.P8,
        DigitalPin.P12,
        PingUnit.Centimeters
        ) < 10 && sonar.ping(
        DigitalPin.P8,
        DigitalPin.P12,
        PingUnit.Centimeters
        ) >= 5) {
            cuteBot.motors(100, -40)
            basic.pause(200)
            while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
                cuteBot.motors(10, 90)
            }
            cuteBot.motors(100, -50)
            basic.pause(200)
        }
    }
})
