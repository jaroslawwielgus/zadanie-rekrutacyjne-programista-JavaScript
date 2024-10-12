sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
	],
	(Controller, Filter, FilterOperator) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.Table", {
			onInit() {
				console.log("Kontroler zainicjalizowany");
			},

			onAfterRendering() {
				// Ustawiamy model dopiero po pełnym załadowaniu widoku
				var oDataModel = new sap.ui.model.odata.v2.ODataModel(
					"https://thingproxy.freeboard.io/fetch/https://services.odata.org/V2/Northwind/Northwind.svc"
				);

				// Sprawdzamy, czy widok jest dostępny
				if (this.getView()) {
					this.getView().setModel(oDataModel);
					console.log("Model ustawiony po załadowaniu widoku");

					var oTable = this.byId("idCustomers");
					var oBinding = oTable.getBinding("items");
					var oSorter = new sap.ui.model.Sorter("CompanyName", false); // false oznacza sortowanie rosnące
					oBinding.sort(oSorter);
				} else {
					console.error("Widok nie jest dostępny");
				}
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

			onSortAscending: function () {
				var oTable = this.byId("idCustomers");
				var oBinding = oTable.getBinding("items");
				var oSorter = new sap.ui.model.Sorter("CompanyName", false); // false oznacza sortowanie rosnące
				oBinding.sort(oSorter);
			},

			onSortDescending: function () {
				var oTable = this.byId("idCustomers");
				var oBinding = oTable.getBinding("items");
				var oSorter = new sap.ui.model.Sorter("CompanyName", true); // true oznacza sortowanie malejące
				oBinding.sort(oSorter);
			},
		});
	}
);
