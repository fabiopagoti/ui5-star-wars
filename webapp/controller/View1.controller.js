sap.ui.define([
	"sap/ui/core/mvc/Controller", // VIRGULA!!!!
	"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ovly.star_wars.controller.View1", {
		
		identificador: null,
		
		onInit: function () {
			this.identificador = this.byId("identificador"); // sap.m.SearchField
			
			this.oModel = this.getOwnerComponent().getModel(); // new JSONModel();
			// this.getView().setModel(this.oModel);
			this.oModel.attachRequestCompleted(this.onRequestCompleted, this);
			
			// @type sap.ui.model.json.JSONModel
			this.oOptionsModel = this.getOwnerComponent().getModel("options");
			this.oOptionsModel.setProperty("/id", 1);
			this.oOptionsModel.setProperty("/ocupado", false);
			
			// this.getView().setModel(this.oOptionsModel, "options");
			 //this.byId("form").setModel(this.oOptionsModel, "options");
		},
		
		onRequestCompleted: function(oEvent){
			this.oOptionsModel.setProperty("/ocupado", false);
		},
	
		onPressBuscar: function(oEvent){
			// var sId = this.identificador.getValue(); // <------
			var sId = this.oOptionsModel.getProperty("/id");
			this.oOptionsModel.setProperty("/ocupado", true);
			
			this.oModel.loadData("https://swapi.co/api/people/" + sId + "/");
			
			// nao faz mais o set de ocupado para false
		},
			
		onPressDocs: function (oEvent) {
		
		}
	});
});