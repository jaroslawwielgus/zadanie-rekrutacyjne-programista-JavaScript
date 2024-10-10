sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.App", {
		onInit() {
			console.log("onInit called");
			const oModel = this.getOwnerComponent().getModel("mainService");
			this.getView().setModel(oModel);
			console.log("Model OData ustawiony:", oModel);
		},
	});
});
