// start Service
bluetooth.startTemperatureService()
basic.showIcon(IconNames.Happy)

// connected Bluetooth
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
