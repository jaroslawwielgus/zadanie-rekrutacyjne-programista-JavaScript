sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/odata/v2/ODataModel",
	],
	(Controller, MessageToast, ODataModel) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.StartPanel", {
			onInit() {
				const oModel = new ODataModel(
					"http://localhost:8080/odata/Northwind.svc"
				);
				this.getView().setModel(oModel);
			},

			onShowClients() {
				const oBundle = this.getView().getModel("i18n").getResourceBundle();
				const sRecipient = this.getView()
					.getModel()
					.getProperty("/recipient/name");
				const sMsg = oBundle.getText("dataMsg", [sRecipient]);

				MessageToast.show(sMsg);
			},
		});
	}
);
