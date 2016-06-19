(function(angular){

	angular
		.module('app')
			.controller(
        'MainController',
        ['$scope',
         function($scope){
          /*******local variables!!*******/
          var self = $scope;

					/*******web variables*******/

					/*****************************************************************Personal DATA*****/
					self.userName = null
					self.userEmail = null;
					self.userBornDate = new Date(1990,00,01);

					/***************************************************************END Personal DATA*****/

					/*************************************************************REMUNERATION VARIABLES**********/
					//self.dateRetirement = null;
					self.typeRemuneration = 2;
					/********type 1 Remuneracion constante*****/
					self.mothEarnIt = 0;
					self.cantPaymentPerYear = null;
					/******** END type 1 Remuneracion constante*****/

					/******* type 2 remuneracion intermitente *****/
					self.dateAtInitWork;
					self.dateViewDisplayInitWork = null;
					self.dateAtFinishtWork = null; //--not in use!!
					self.arrRemunerations = [];
					self.remusTags = {
					    "width" : "0px"
					};
					self.objRemuneration = {
						remunerationCant: null,
						dateBegin: null,
						dateEnd: null
					};


					self.validDateInitWork = function(){
						//Se activa al cambiar "Inicio de vida laboral"
						//Verifica que la fecha de inicio de vida laboral sea mayor a la de nacimiento
						if(self.dateAtInitWork && self.userBornDate){
							if(moment(new Date(self.dateAtInitWork)).isSameOrBefore(moment(new Date(self.userBornDate)))){
								console.log("fecha laboral debe ser mayor a la de nacimiento");
								swal({
								  title: "Cuidado",
								  text: "El inicio de vida laboral no puede ser anterior a la de nacimiento",
								  type: "warning",
								  confirmButtonText: "ok"
								});
								self.dateAtInitWork = null;
							}
						}else{
							console.log("Es necesario la fecha de nacimiento");
							swal({
							  title: "Primero",
							  text: "Debes ingresar tu fecha de nacimiento",
							  type: "warning",
							  confirmButtonText: "ok"
							});
							self.dateAtInitWork = null;
						}
						self.deleteObjRemunerationDateInArray();
						self.dateViewDisplayInitWork = moment(self.dateAtInitWork).format('Do MMMM YYYY');
						$('#remu-end').html(moment(new Date(self.dateAtInitWork)).add(+$('#display-3')[0].innerHTML, 'y').format('Do MMMM YYYY'));
						$('#FM-end').html(moment(new Date(self.dateAtInitWork)).add(+$('#display-3')[0].innerHTML, 'y').format('Do MMMM YYYY'));
						$('#FA-end').html(moment(new Date(self.dateAtInitWork)).add(+$('#display-3')[0].innerHTML, 'y').format('Do MMMM YYYY'));
					};

					self.agregateNewRemuneration = function(){

						//Check if objRemuneration is valid
						console.log("Check if objRemuneration is valid");
						console.log(!objRemunerationIsValid(self.objRemuneration));
						if(!objRemunerationIsValid(self.objRemuneration)){
							return;
						}
						//check with other dates conflict
						console.log("check with other dates conflict");
						console.log(!checkObjRemunerationDateConflictInArray());
						if(!checkObjRemunerationDateConflictInArray()) {
			              return;
			            }

				         //Pasados los filtros agrego al array
				         self.arrRemunerations.push({
				           remunerationCant: self.objRemuneration.remunerationCant,
				           dateBegin: new Date(self.objRemuneration.dateBegin),
				           dateEnd: self.objRemuneration.dateEnd
				         });
							//Sort segun las fechas de inicio
				         self.arrRemunerations = _.sortBy(self.arrRemunerations, 'dateBegin');
				         //actualizacion del tamaño de cada periodo CSS!!
						updateTimeLineTagsView();
				         //Reset
				         self.objRemuneration.remunerationCant = null;
				         self.objRemuneration.dateBegin = null;
				         self.objRemuneration.dateEnd = null;

					};

					var objRemunerationIsValid = function(objParam){
						if(!objParam){
							return false;
						}
						if(!objParam.remunerationCant ||
						!objParam.dateBegin ||
						!objParam.dateEnd){
							console.log("invalid params!");
							return false;
						}
						if(moment(new Date(objParam.dateBegin)).isSameOrAfter(moment(new Date(objParam.dateEnd)))){
							console.log("fecha de inicio debe ser anterior a la de fin");
							errorMessages("Cuidado","La fecha de inicio debe ser anterior a la de fin");
							return false;
						}
						if(moment(new Date(objParam.dateBegin)).isBefore(moment(new Date(self.dateAtInitWork)))){
							console.log("fecha de inicio debe ser posterior a la fecha inicio trabajo");
							errorMessages("Cuidado","La fecha de inicio debe ser posterior a la fecha de inicio de vida laboral");
							return false;
						}
						if(moment(new Date(objParam.dateEnd)).isAfter(moment(new Date($('#remu-end')[0].innerHTML)))){
							console.log("La fecha de termino debe ser anterior a " +  $('#remu-end')[0].innerHTML);
							errorMessages("Cuidado","La fecha de fin debe ser anterior al fin de vida laboral");
							return false;
						}
						return true;
					};

					var checkObjRemunerationDateConflictInArray = function(){


						for (var i = 0; i < self.arrRemunerations.length ; i++) {

							if(moment(new Date(self.objRemuneration.dateBegin)).isBetween(new Date(self.arrRemunerations[i].dateBegin), new Date(self.arrRemunerations[i].dateEnd))||
								moment(new Date(self.objRemuneration.dateEnd)).isBetween(new Date(self.arrRemunerations[i].dateBegin), new Date(self.arrRemunerations[i].dateEnd))||
								moment(new Date(self.arrRemunerations[i].dateBegin)).isBetween(new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))||
								moment(new Date(self.arrRemunerations[i].dateEnd)).isBetween( new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))) {
                				console.log("conflicto con los periodos existentes");
								errorMessages("Cuidado","El rango de fechas ingresado presenta conflicto con los que ya selecciono previamente");
								return false;
							}

						}

						return true;
						/*
						var arrSize = self.arrRemunerations.length;
						self.arrRemunerations.forEach(function(arrayItem, index){

							console.log(moment(new Date(self.objRemuneration.dateBegin)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd)));
							console.log(moment(new Date(self.objRemuneration.dateEnd)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd)));
							console.log(moment(new Date(arrayItem.dateBegin)).isBetween(new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd)));
							console.log(moment(new Date(arrayItem.dateEnd)).isBetween( new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd)));

							if(moment(new Date(self.objRemuneration.dateBegin)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd))||
								moment(new Date(self.objRemuneration.dateEnd)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd))||
								moment(new Date(arrayItem.dateBegin)).isBetween(new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))||
								moment(new Date(arrayItem.dateEnd)).isBetween( new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))) {
                console.log("conflicto con los periodos existentes");
								return false;
							}
							if(arrSize - 1 == index){
								return true
							}
						});
						*/


					};

					var updateTimeLineTagsView = function(){
						//var totalWidth =
						console.log($("#remu-tline").width());

						var totalWidth = parseInt($("#remu-tline").width());
						var cantTags = self.arrRemunerations.length;
						var tagWidth = (100*(totalWidth/cantTags))/(totalWidth) - 2;

						//$("#remus").width(String(tagWidth)+"%");

						self.remusTags = {
						    "width" : String(tagWidth)+"%"
						};

					};

					self.deleteRemu = function(index){
						if (index > -1) {
						    self.arrRemunerations.splice(index, 1);
						    updateTimeLineTagsView();
						}
					};
					self.deleteObjRemunerationDateInArray = function(){
						self.arrRemunerations = [];
					};

					var errorMessages = function(title,message){
						swal({
							title: title,
							text: message,
							type: "warning",
							confirmButtonText: "ok"
						});
					};

			          /*PENDIENTE*/
			          var fixEmptySpacesObjRemunerationDateInArray = function(){
			            var tempArray = angular.copy(self.arrRemunerations);
			            tempArray.forEach(function(arrayItem, index){
			            });
			          };

					/******* END type 2 remuneracion intermitente *****/
					/************************************************************************* END REMUNERATION VARIABLES**********/



					/*************************************************************FONDO AFP VARIABLES**********/
					self.typeSelectionFondoAfp = 1;
					/******* type 1 Tasas de ingreso manual ***************************/

					self.objFondoPersonalizado = {
						dateBegin: new Date(),
						dateEnd: new Date(),
						tasaFlujoInicial: 99.1,
						comisionSaldo: 99.1,
						disminucionFlujoAnual: 99.1,
						primaDeSeguro: 99.1,
						tasaRentabilidad: 10.1
					};

					self.arrObjFondosPersonalizados = [];
					/*
					self.arrObjFondosPersonalizados = [{
						dateBegin: new Date(2016,05,10),
						dateEnd: new Date(2016,05,20),
						tasaFlujoInicial: 99.1,
						comisionSaldo: null,
						comisionFlujoInicial: null,
						primaSeguros: null,
						tasaRentabilidad: 23
					},{
						dateBegin: new Date(),
						dateEnd: new Date(),
						tasaFlujoInicial: 99.1,
						comisionSaldo: null,
						comisionFlujoInicial: null,
						primaSeguros: null,
						tasaRentabilidad: 24
					}];*/
					self.fmanTags = {
					    "width" : "50%"
					};
					self.deleteFondoMan = function(index){
						if (index > -1) {
						    self.arrObjFondosPersonalizados.splice(index, 1);
						    //updateTimeLineTagsView();
						}
					};
					self.addFondoPersonalizado = function(){
						if(!objFondoPersonalizadoCheck(self.objFondoPersonalizado)){
							return;
						}

						console.log(!checkObjFondosPersonalizadosConflictInArray());
						if(!checkObjFondosPersonalizadosConflictInArray()){
							return;							
						}

						//Pasados los filtros agrego al array
				      self.arrObjFondosPersonalizados.push({
				         	dateBegin: self.objFondoPersonalizado.dateBegin,
									dateEnd: self.objFondoPersonalizado.dateEnd,
									tasaFlujoInicial: self.objFondoPersonalizado.tasaFlujoInicial,
									comisionSaldo: self.objFondoPersonalizado.comisionSaldo,
									comisionFlujoInicial: self.objFondoPersonalizado.comisionFlujoInicial,
									primaSeguros: self.objFondoPersonalizado.primaSeguros,
									tasaRentabilidad: self.objFondoPersonalizado.tasaRentabilidad
				      });
							
							//Sort segun las fechas de inicio
				      self.arrObjFondosPersonalizados = _.sortBy(self.arrObjFondosPersonalizados, 'dateBegin');
				      
				      //actualizacion del tamaño de cada periodo CSS!!
							updateTimeLineTagsViewFondosManuales();
				      
				      //Reset
				      self.objFondoPersonalizado.dateBegin = null;
							self.objFondoPersonalizado.dateEnd = null;
							self.objFondoPersonalizado.tasaFlujoInicial = null;
							self.objFondoPersonalizado.comisionSaldo = null;
							self.objFondoPersonalizado.disminucionFlujoAnual = null;
							self.objFondoPersonalizado.primaDeSeguro = null;
							self.objFondoPersonalizado.tasaRentabilidad = null;


					};

					var objFondoPersonalizadoCheck = function(objParam){
						if(!objParam){
							return false;
						}
						if(!objParam.dateBegin ||
						!objParam.dateEnd ||
						!objParam.comisionSaldo ||
						!objParam.disminucionFlujoAnual ||
						!objParam.primaDeSeguro ||
						!objParam.tasaRentabilidad ||
						!objParam.tasaFlujoInicial){
							console.log("invalid params!");
							return false;
						}
						if(moment(new Date(objParam.dateBegin)).isSameOrAfter(moment(new Date(objParam.dateEnd)))){
							console.log("fecha de inicio debe ser anterior a la de fin");
							errorMessages("Cuidado","La fecha de inicio debe ser anterior a la de fin");
							return false;
						}
						if(moment(new Date(objParam.dateBegin)).isBefore(moment(new Date(self.dateAtInitWork)))){
							console.log("fecha de inicio debe ser posterior a la fecha inicio trabajo");
							errorMessages("Cuidado","La fecha de inicio debe ser posterior a la fecha de inicio de vida laboral");
							return false;
						}
						if(moment(new Date(objParam.dateEnd)).isAfter(moment(new Date($('#remu-end')[0].innerHTML)))){
							console.log("La fecha de termino debe ser anterior a " +  $('#remu-end')[0].innerHTML);
							errorMessages("Cuidado","La fecha de fin debe ser anterior al fin de vida laboral");
							return false;
						}
						return true;
					};


					var checkObjFondosPersonalizadosConflictInArray = function(){
						for (var i = 0; i < self.arrObjFondosPersonalizados.length ; i++) {
							if(moment(new Date(self.objFondoPersonalizado.dateBegin)).isBetween(new Date(self.arrObjFondosPersonalizados[i].dateBegin), new Date(self.arrObjFondosPersonalizados[i].dateEnd))||
								moment(new Date(self.objFondoPersonalizado.dateEnd)).isBetween(new Date(self.arrObjFondosPersonalizados[i].dateBegin), new Date(self.arrObjFondosPersonalizados[i].dateEnd))||
								moment(new Date(self.arrObjFondosPersonalizados[i].dateBegin)).isBetween(new Date(self.objFondoPersonalizado.dateBegin), new Date(self.objFondoPersonalizado.dateEnd))||
								moment(new Date(self.arrObjFondosPersonalizados[i].dateEnd)).isBetween( new Date(self.objFondoPersonalizado.dateBegin), new Date(self.objFondoPersonalizado.dateEnd))) {
                console.log("conflicto con los periodos existentes");
								errorMessages("Cuidado","El rango de fechas ingresado presenta conflicto con los que ya selecciono previamente");
								return false;
							}
						}
						return true;
					}

					var updateTimeLineTagsViewFondosManuales = function(){
						//var totalWidth =
						console.log($("#remu-tline2").width());

						var totalWidth = parseInt($("#remu-tline2").width());
						var cantTags = self.arrObjFondosPersonalizados.length;
						var tagWidth = (100*(totalWidth/cantTags))/(totalWidth) - 2;

						//$("#remus").width(String(tagWidth)+"%");

						self.fmanTags = {
						    "width" : String(tagWidth)+"%"
						};

					};

					/******* END Tasas de ingreso manual *******************************/
					/******* Ingreso de tasas Automaticas *******************************/
					self.arrayAfpsFromDb = [{
						nombreFondo: "Fondo 1",
						nombreAfp: "Integra",
						tasaFlujoInicial: 12.5,
						comisionSaldo: 12.5,
						disminucionFlujoAnual: 12.5,
						primaDeSeguro: 12.5,
						tasaRentabilidad: 12.5
					},{
						nombreFondo: "Fondo 2",
						nombreAfp: "Integra",
						tasaFlujoInicial: 15.5,
						comisionSaldo: 15.5,
						disminucionFlujoAnual: 15.5,
						primaDeSeguro: 15.5,
						tasaRentabilidad: 15.5
					},{
						nombreFondo: "Fondo 3",
						nombreAfp: "Integra",
						tasaFlujoInicial: 20.4,
						comisionSaldo: 20.4,
						disminucionFlujoAnual: 20.4,
						primaDeSeguro: 20.4,
						tasaRentabilidad: 20.4
					},{
						nombreFondo: "Fondo 4",
						nombreAfp: "Integra",
						tasaFlujoInicial: 50.1,
						comisionSaldo: 50.1,
						disminucionFlujoAnual: 50.1,
						primaDeSeguro: 50.1,
						tasaRentabilidad: 50.1
					}];

					self.objFondoAutomatico = {
						dateBegin: new Date(),
						dateEnd: new Date(),
						nombreFondo: "",
						nombreAfp: "",
						tasaFlujoInicial: null,
						comisionSaldo: null,
						disminucionFlujoAnual: null,
						primaDeSeguro: null,
						tasaRentabilidad: null
					};

					self.setFondoDeAfp = function(objFondo){
						
						self.objFondoAutomatico.nombreFondo = objFondo.nombreFondo;
						self.objFondoAutomatico.nombreAfp = objFondo.nombreAfp;
						self.objFondoAutomatico.tasaFlujoInicial = objFondo.tasaFlujoInicial;
						self.objFondoAutomatico.comisionSaldo = objFondo.comisionSaldo;
						self.objFondoAutomatico.disminucionFlujoAnual = objFondo.disminucionFlujoAnual;
						self.objFondoAutomatico.primaDeSeguro = objFondo.primaDeSeguro;
						self.objFondoAutomatico.tasaRentabilidad = objFondo.tasaRentabilidad;

					};


					self.arrFondosDeAfpAutomaticos = [];


					self.deleteFondoAutomatico = function(index){
						if (index > -1) {
						    self.arrFondosDeAfpAutomaticos.splice(index, 1);
						    //updateTimeLineTagsView();
						}
					};



					/******* END Ingreso de tasas Automaticas ****************************/
					/*************************************************************END FONDO AFP VARIABLES**********/







			}]);
})(window.angular);
