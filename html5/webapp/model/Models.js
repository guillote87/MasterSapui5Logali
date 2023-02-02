sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    function (JSONModel,Device) {
        'use strict';

        return {

            createRecipient: function () {
                var Odata ={
                    "recipient":{
                        name: "World"
                    }
                }
                return new JSONModel(Odata)
            },
            createDeviceModel: function(){
                const oDevice = new JSONModel(Device)
                oDevice.setDefaultBindingMode("OneWay")
                return oDevice
            }
        }

    });