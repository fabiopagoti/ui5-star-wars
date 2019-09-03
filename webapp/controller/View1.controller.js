sap.ui.define([
	"sap/ui/core/mvc/Controller", // VIRGULA!!!!
	"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ovly.star_wars.controller.View1", {
		
		identificador: null,
		
		onInit: function () {
			this.identificador = this.byId("identificador"); // sap.m.SearchField
			
			this.oModel = new JSONModel();
			this.getView().setModel(this.oModel);
		},
	
		onPressBuscar: function(oEvent){
			var sId = this.identificador.getValue(); // <------
			this.oModel.loadData("https://swapi.co/api/people/" + sId);
		},
			
		onPressDocs: function (oEvent) {
		
		}
	});
});