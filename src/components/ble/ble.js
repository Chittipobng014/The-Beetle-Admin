export default {
    turnONOFF: (peripheral, cmd) => {
        for (let index = 0; index < peripheral.characteristics.length; index++) {
            const element = peripheral.characteristics[index];
            if (element.properties == 'Write') {
                var array = new Uint8Array(cmd.length);
                for (var i = 0, l = cmd.length; i < l; i++) {
                    array[i] = cmd.charCodeAt(i);
                }
                ble.write(peripheral.id, element.service, element.characteristic, array.buffer, function () {
                    console.log('k');
                }, function () {
                    console.log('f');
                });
            }
        }
    },
    stringToBytes: (string) => {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    }
}