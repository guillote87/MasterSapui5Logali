sap.ui.define([
    "sap/ui/core/UIComponent",
    "gq4dev/html5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     */


    function (UIComponent, Models, ResourceModel, HelloDialog) {
        'use strict';

        return UIComponent.extend("gq4dev.html5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //Llamado a la funcion inicial 
                UIComponent.prototype.init.apply(this, arguments)

                this.setModel(Models.createRecipient())

                //setear el model i18n en la vista
                var i18nModel = new ResourceModel({ bundleName: "gq4dev.html5.i18n.i18n" })
                this.setModel(i18nModel, "i18n")
                // Crea una instancia del objeto manejado helloDialog
                this._helloDialog = new HelloDialog(this.getRootControl())
            },
            exit: function () {
                this._helloDialog.destroy()
                delete this._helloDialog
            },
            openHelloDialog: function () {
                this._helloDialog.open()
            }

        })
    });