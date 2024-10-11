var ControllerInstance;

sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
	],
	(Controller, Filter, FilterOperator) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.Table", {
			constructor: function () {
				if (!ControllerInstance) {
					ControllerInstance = this;
					this.onInit();
				}
				return ControllerInstance;
			},

			onInit() {
				console.log("coś");
				var oDataModel = new sap.ui.model.odata.v2.ODataModel(
					"https://thingproxy.freeboard.io/fetch/https://services.odata.org/V2/Northwind/Northwind.svc"
				);
				this.getView().setModel(oDataModel);
			},

			onFilterInvoices(oEvent) {
				const aFilter = [];
				const sQuery = oEvent.getParameter("query");
				if (sQuery) {
					aFilter.push(new Filter("City", FilterOperator.Contains, sQuery));
				}

				const oList = this.byId("idCustomers");
				const oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			},
		});
	}
);
