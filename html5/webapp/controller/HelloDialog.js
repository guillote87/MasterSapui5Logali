sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"

    /**      
    * @param {typeof sap.ui.base.ManagedObject} ManagedObject
    * * @param {typeof sap.ui.core.Fragment} Fragment
    */

], function (ManagedObject,Fragment) {
    'use strict';
    return ManagedObject.extend("gq4dev.html5.controller.HelloDialog", {
        //Instancia de la vista a la cual se va a mostrar el objeto
        constructor: function (oView) {
            this._oView = oView
        },
        //Funcion que elimina el objeto
        exit: function () {
            delete this._oView
        },
        //Funcion que abre el objeto
        open: function () {
            const oView = this._oView

            // Creacion del dialog lazily
            if (!oView.byId("helloDialog")) {

                let oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close()
                    }
                }
                //carga asincronamente fragmento XML
                Fragment.load({
                    id: oView.getId(),
                    name: "gq4dev.html5.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog)
                    oDialog.open()
                })
            } else {
                oView.byId("helloDialog").open()
            }
        }
    })

});