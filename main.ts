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
            cuteBot.motors(30, 30)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, -27)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(-27, 30)
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
            cuteBot.motors(-40, 100)
            basic.pause(150)
            while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
                cuteBot.motors(100, 20)
            }
            cuteBot.motors(-50, 100)
            basic.pause(200)
        }
    }
})
