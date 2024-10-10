sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	(Controller, MessageToast) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.StartPanel", {
			onShowClients() {
				console.log("coś");
				const oBundle = this.getView().getModel("i18n").getResourceBundle();
				const sRecipient = this.getView()
					.getModel()
					.getProperty("/recipient/name");
				const sMsg = oBundle.getText("dataMsg", [sRecipient]);

				MessageToast.show(sMsg);

				console.log("cokolwiek");
			},
		});
	}
);
