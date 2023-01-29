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

            const oList = this.byId("InvoicesList")
            //Traigo el binding a los items de la lista
            const oBinding = oList.getBinding("items")
            //A los items que tengo en la lista le aplico el filtro
            oBinding.filter(aFilter)
        }
    })
});