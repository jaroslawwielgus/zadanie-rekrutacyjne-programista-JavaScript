var ControllerInstance;

sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.StartPanel", {
		onShowClients() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("table");
		},
	});
});
