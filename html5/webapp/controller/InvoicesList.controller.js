sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */
], function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
    'use strict';
    return Controller.extend("gq4dev.html5.controller.InvoicesList", {
        formatter: InvoicesFormatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            })
            this.getView().setModel(oViewModel, "currency")
        },
        onFilterInvoices: function (oEvent) {
            //devuelve el valor introducido en el searchField
            const sQuery = oEvent.getParameter("query")

            const aFilter = []

            if (sQuery) {
                aFilter.push(new Filter('ProductName', FilterOperator.Contains, sQuery))
            }

            const oTable = this.byId("InvoicesTable")
            //Traigo el binding a los items de la tabla
            const oBinding = oTable.getBinding("items")
            //A los items que tengo en la lista le aplico el filtro
            oBinding.filter(aFilter)
        },
        navigateToDetails: function (oEvent) {
            const oItem = oEvent.getSource()

            const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
            
            oRouter.navTo("Details",{
                // Esto me devuelve la ruta que esta en el navegador
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))

            })
        }
    })


});