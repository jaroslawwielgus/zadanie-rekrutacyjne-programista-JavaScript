sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	(Controller, MessageToast) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.StartPanel", {
			// onInit() {
			// 	console.log("onInit called");
			// 	const oModel = this.getOwnerComponent().getModel("mainService");
			// 	this.getView().setModel(oModel);
			// 	console.log("Model OData ustawiony:", oModel);
			// },

			onShowClients() {
				console.log("onShowClients called");
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
