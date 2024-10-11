var ControllerInstance;

sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	(Controller, MessageToast) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.StartPanel", {
			onShowClients() {
				const oBundle = this.getView().getModel("i18n").getResourceBundle();
				const oModel = this.getOwnerComponent().getModel();
				const sRecipient = oModel.getProperty("/recipient/name");
				const sMsg = oBundle.getText("dataMsg", [sRecipient]);
				MessageToast.show(sMsg);
			},
		});
	}
);
