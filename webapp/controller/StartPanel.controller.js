var ControllerInstance;

sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	(Controller, MessageToast) => {
		"use strict";

		return Controller.extend("ui5.walkthrough.controller.StartPanel", {
			constructor: function () {
				if (!ControllerInstance) {
					ControllerInstance = this;
					this.onInit();
				}
				return ControllerInstance;
			},

			onInit() {
				var oDataModel = new sap.ui.model.odata.v2.ODataModel(
					"https://thingproxy.freeboard.io/fetch/https://services.odata.org/V2/Northwind/Northwind.svc"
				);
				this.getView().setModel(oDataModel);
			},

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
