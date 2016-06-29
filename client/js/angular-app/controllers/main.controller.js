(function(angular){

	angular
		.module('app')
			.controller(
        'MainController',
        ['$scope',
				'Usuario',
				'$cookies',
				'Excel',
				'$timeout',
         function($scope,
				 Usuario,
			 	 $cookies,Excel,$timeout){
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
					self.typeRemuneration = 1;
					/********type 1 Remuneracion constante*****/
					self.mothEarnIt = 800;
					self.cantPaymentPerYear = null;
					/******** END type 1 Remuneracion constante*****/

					/******* type 2 remuneracion intermitente *****/
					self.dateAtInitWork = new Date();
					self.dateViewDisplayInitWork = null;
					self.dateAtFinishtWork = null; //--not in use!!
					self.arrRemunerations = [];
					self.remusTags = {
					    "width" : "0px"
					};
					self.objRemuneration = {
						remunerationCant: null,
						dateBegin: new Date(),
						dateEnd: new Date()
					};
					self.requiredRemuInterInputColors = {
						dateAtInitWork: false,
						remunerationCant: false,
						dateBegin: false,
						dateEnd: false
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
						self.deleteAllArraysInvolved();
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
				         self.objRemuneration.dateBegin = new Date();
				         self.objRemuneration.dateEnd = new Date();

					};

					var objRemunerationIsValid = function(objParam){
						if(!objParam){
							return false;
						}

						//Show errors!
						(!self.dateAtInitWork ? self.requiredRemuInterInputColors.dateAtInitWork = true :  self.requiredRemuInterInputColors.dateAtInitWork = false);
						(!objParam.remunerationCant ? self.requiredRemuInterInputColors.remunerationCant = true :  self.requiredRemuInterInputColors.remunerationCant = false);
						(!objParam.dateBegin ? self.requiredRemuInterInputColors.dateBegin = true :  self.requiredRemuInterInputColors.dateBegin = false);
						(!objParam.dateEnd ? self.requiredRemuInterInputColors.dateEnd = true :  self.requiredRemuInterInputColors.dateEnd = false);



						if(!self.dateAtInitWork ||
							!objParam.remunerationCant ||
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
					self.deleteAllArraysInvolved = function(){
						self.arrRemunerations = [];
						self.arrObjFondosPersonalizados = [];
						self.arrFondosDeAfpAutomaticos = [];
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
					self.typeSelectionFondoAfp = 2;
					/******* type 1 Tasas de ingreso manual ***************************/

					self.objFondoPersonalizado = {
						dateBegin: new Date(),
						dateEnd: new Date(2081,00,01),
						//tasaFlujoInicial: 99.1,
						comisionSaldo: 1.20,
						//disminucionFlujoAnual: 99.1,
						primaDeSeguro: 2.00,
						tasaRentabilidad: 1.20
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
					self.requiredAfpManualInputColors = {
						//tasaFlujoInicial: false,
						comisionSaldo: false,
						//disminucionFlujoAnual: false,
						primaDeSeguro: false,
						tasaRentabilidad: false
					};




					self.deleteFondoMan = function(index){
						if (index > -1) {
						    self.arrObjFondosPersonalizados.splice(index, 1);
						    //updateTimeLineTagsView();
						}
					};
					self.addFondoPersonalizado = function(){

						console.log(!objFondoPersonalizadoCheck(self.objFondoPersonalizado));

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
									//tasaFlujoInicial: self.objFondoPersonalizado.tasaFlujoInicial,
									comisionSaldo: self.objFondoPersonalizado.comisionSaldo,
									//comisionFlujoInicial: self.objFondoPersonalizado.comisionFlujoInicial,
									primaDeSeguro: self.objFondoPersonalizado.primaDeSeguro,
									tasaRentabilidad: self.objFondoPersonalizado.tasaRentabilidad
				      });

							//Sort segun las fechas de inicio
				      self.arrObjFondosPersonalizados = _.sortBy(self.arrObjFondosPersonalizados, 'dateBegin');

				      //actualizacion del tamaño de cada periodo CSS!!
							updateTimeLineTagsViewFondosManuales();

				      //Reset
				      self.objFondoPersonalizado.dateBegin = new Date();
							self.objFondoPersonalizado.dateEnd = new Date();
							//self.objFondoPersonalizado.tasaFlujoInicial = null;
							self.objFondoPersonalizado.comisionSaldo = null;
							//self.objFondoPersonalizado.disminucionFlujoAnual = null;
							self.objFondoPersonalizado.primaDeSeguro = null;
							self.objFondoPersonalizado.tasaRentabilidad = null;


					};

					var objFondoPersonalizadoCheck = function(objParam){
						if(!objParam){
							return false;
						}

						if(!self.dateAtInitWork){
							errorMessages("Cuidado","Debes establecer la fecha de inicio de vida laboral");
							return false;
						}


						if(!('nombreFondo' in objParam)){
								//(!self.objFondoPersonalizado.tasaFlujoInicial ? 			self.requiredAfpManualInputColors.tasaFlujoInicial = true :  			self.requiredAfpManualInputColors.tasaFlujoInicial = false);
								(!self.objFondoPersonalizado.comisionSaldo ? 					self.requiredAfpManualInputColors.comisionSaldo = true :  				self.requiredAfpManualInputColors.comisionSaldo = false);
								//(!self.objFondoPersonalizado.disminucionFlujoAnual ? 	self.requiredAfpManualInputColors.disminucionFlujoAnual = true :  self.requiredAfpManualInputColors.disminucionFlujoAnual = false);
								(!self.objFondoPersonalizado.primaDeSeguro ? 					self.requiredAfpManualInputColors.primaDeSeguro = true :  				self.requiredAfpManualInputColors.primaDeSeguro = false);
								(!self.objFondoPersonalizado.tasaRentabilidad ? 			self.requiredAfpManualInputColors.tasaRentabilidad = true :  			self.requiredAfpManualInputColors.tasaRentabilidad = false);
						}



						if(!objParam.dateBegin ||
						!objParam.dateEnd ||
						!objParam.comisionSaldo ||
						!objParam.primaDeSeguro ||
						!objParam.tasaRentabilidad){
							console.log("invalid params!");
							if('nombreFondo' in objParam){
								errorMessages("Cuidado","Debes seleccionar un fondo de AFP");
							}else{
								errorMessages("Cuidado","Debes ingresar todos los campos");
							}
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
					self.arrFondosDeAfpAutomaticos = [];
					self.objFondoAutomatico = {
						dateBegin: new Date(),
						dateEnd: new Date(),
						nombreFondo: null,
						nombreAfp: "",
						tasaFlujoInicial: null,
						comisionSaldo: null,
						disminucionFlujoAnual: null,
						primaDeSeguro: null,
						tasaRentabilidad: null
					};
					self.fautoTags = {
					    "width" : "50%"
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

					self.deleteFondoAutomatico = function(index){
						if (index > -1) {
						    self.arrFondosDeAfpAutomaticos.splice(index, 1);
						    //updateTimeLineTagsView();
						}
					};


					self.addNewFondoAfpToArray = function(){

						(!self.dateAtInitWork ? self.requiredRemuInterInputColors.dateAtInitWork = true :  self.requiredRemuInterInputColors.dateAtInitWork = false);

						if(!self.dateAtInitWork){
							errorMessages("Cuidado","Debes establecer una fecha de inicio de vida laboral");
							return;
						}

						if(!objFondoPersonalizadoCheck(self.objFondoAutomatico)){
							return;
						}

						console.log(!checkObjFondosAutomaticosConflictInArray());
						if(!checkObjFondosAutomaticosConflictInArray()){
							return;
						}

						//Pasados los filtros agrego al array
				      self.arrFondosDeAfpAutomaticos.push({
				      		nombreFondo: self.objFondoAutomatico.nombreFondo,
									nombreAfp: self.objFondoAutomatico.nombreAfp,
				         	dateBegin: self.objFondoAutomatico.dateBegin,
									dateEnd: self.objFondoAutomatico.dateEnd,
									tasaFlujoInicial: self.objFondoAutomatico.tasaFlujoInicial,
									comisionSaldo: self.objFondoAutomatico.comisionSaldo,
									comisionFlujoInicial: self.objFondoAutomatico.comisionFlujoInicial,
									primaSeguros: self.objFondoAutomatico.primaSeguros,
									tasaRentabilidad: self.objFondoAutomatico.tasaRentabilidad
				      });

							//Sort segun las fechas de inicio
				      self.arrFondosDeAfpAutomaticos = _.sortBy(self.arrFondosDeAfpAutomaticos, 'dateBegin');

				      //actualizacion del tamaño de cada periodo CSS!!
							updateTimeLineTagsViewFondosAutomaticos();

				      //Reset
				      self.objFondoAutomatico.dateBegin = new Date();
							self.objFondoAutomatico.dateEnd = new Date();
							self.objFondoAutomatico.tasaFlujoInicial = null;
							self.objFondoAutomatico.comisionSaldo = null;
							self.objFondoAutomatico.disminucionFlujoAnual = null;
							self.objFondoAutomatico.primaDeSeguro = null;
							self.objFondoAutomatico.tasaRentabilidad = null;
							self.objFondoAutomatico.nombreFondo = null;
							self.objFondoAutomatico.nombreAfp = null;

					};


					var checkObjFondosAutomaticosConflictInArray = function(){
						for (var i = 0; i < self.arrFondosDeAfpAutomaticos.length ; i++) {
							if(moment(new Date(self.objFondoAutomatico.dateBegin)).isBetween(new Date(self.arrFondosDeAfpAutomaticos[i].dateBegin), new Date(self.arrFondosDeAfpAutomaticos[i].dateEnd))||
								moment(new Date(self.objFondoAutomatico.dateEnd)).isBetween(new Date(self.arrFondosDeAfpAutomaticos[i].dateBegin), new Date(self.arrFondosDeAfpAutomaticos[i].dateEnd))||
								moment(new Date(self.arrFondosDeAfpAutomaticos[i].dateBegin)).isBetween(new Date(self.objFondoAutomatico.dateBegin), new Date(self.objFondoAutomatico.dateEnd))||
								moment(new Date(self.arrFondosDeAfpAutomaticos[i].dateEnd)).isBetween( new Date(self.objFondoAutomatico.dateBegin), new Date(self.objFondoAutomatico.dateEnd))) {
                console.log("conflicto con los periodos existentes");
								errorMessages("Cuidado","El rango de fechas ingresado presenta conflicto con los que ya selecciono previamente");
								return false;
							}
						}
						return true;
					}


					var updateTimeLineTagsViewFondosAutomaticos = function(){
						//var totalWidth =
						console.log($("#remu-tline3").width());

						var totalWidth = parseInt($("#remu-tline3").width());
						var cantTags = self.arrFondosDeAfpAutomaticos.length;
						var tagWidth = (100*(totalWidth/cantTags))/(totalWidth) - 2;

						//$("#remus").width(String(tagWidth)+"%");

						self.fautoTags = {
						    "width" : String(tagWidth)+"%"
						};

					};


					/******* END Ingreso de tasas Automaticas ****************************/
					/*************************************************************END FONDO AFP VARIABLES**********/

					/************************************************************* CALCULO DE DATOS**********/
					self.arrTableView = [];
					self.aditionalData = {
						trea: '',
						van: ''
					};



					self.generateCalculation = function(){
						/****************Variables**********************/
							//var edad = Math.floor(moment.duration(moment().diff(moment(self.userBornDate))).asYears());
							//var anio = moment().year();
							/************************************************************Remuneration*****************/
							//var tipoRemuneracion = +(self.typeRemuneration);
							//CONSTANTE
							//var edadJubilacion = +($('#display-3').html());
							//var remuneracion = +(self.mothEarnIt);
							//var cantSueldosAnuales = +(self.cantPaymentPerYear);
							//INTERMITENTE
							//var arrRemuneracionesInter = self.arrRemunerations;
							/************************************************************END Remuneration*****************/
							/************************************************************Tasas AFP*****************/
							//var tipoSeleccionFondoAfp = +(self.typeSelectionFondoAfp);
							//var arrFondosManuales = self.arrObjFondosPersonalizados;
							/************************************************************END AFP*****************/



							/**********LOCAL***************/
							//var cantidadAniosDeTrbajo = Math.floor(moment.duration(moment(self.userBornDate).add(65, 'y').diff(moment(self.dateAtInitWork))).asYears()); // Anio(fecha de jubilacion) - Anio(fecha inicio vida laboral)
							//var aporteAfpMensual = remuneracion * 0.1;
							//var fondoPensiones = 0;
							//var fondoInicial = 0;
							//var TEM = +(arrFondosManuales[0].tasaRentabilidad)/100;
							//var primaSeguros = +(arrFondosManuales[0].primaDeSeguro)/100;
							//var comisionSaldo = +(arrFondosManuales[0].comisionSaldo)/100;
							//var valorRentabilidad = 0;


							if(self.arrObjFondosPersonalizados.length <= 0){
								errorMessages("Cuidado","Primero debe rellenar los datos laborales y agregar un fondo");
								return;
							}

							self.arrTableView = [];
							self.canIDownloadTableInExcel = false;
							//variables
							var remuneracion = +(self.mothEarnIt);
					    var TEM = +(self.arrObjFondosPersonalizados[0].tasaRentabilidad)/100;
					    var prima = +(self.arrObjFondosPersonalizados[0].primaDeSeguro)/100;
					    var PcomisionAFP = +(self.arrObjFondosPersonalizados[0].comisionSaldo)/100;
							var edadJubilacion = +($('#display-3').html());
							var cantidadAniosDeTrbajo = Math.floor(moment.duration(moment(self.userBornDate).add(edadJubilacion, 'y').diff(moment(self.dateAtInitWork))).asYears()); // Anio(fecha de jubilacion) - Anio(fecha inicio vida laboral)

					    //constante
					    var PaporteAFP = 0.1;//porcentaje del salario q se agregara al fondo (calculado luego)
					    var inversion = 200;//para nuestro fondo de pensiones le cobraremos un monto por abrir su fondo que sera fijo y bueno, seria una inversion.
					    var fondo = 0;//valor inicial del fondo el cual pusimos solo para simular que no hayan errores. Apenas se abre una cuenta debe tener ya 800 soles...como si se le pusiera un deposito le explicamos al profe


					    //auxiliares
							var anio = moment(self.dateAtInitWork).year();
					    var comisionAFP;//variable de almancenamiento usada para calculos cada anio
					    var fondo_i = 0;//varialble tecnicamente auxiliar
					    var sumatoria = 0;//usado para el calculo del van
					    var rentabilidad = 0;//variable comun
					    var cok = 0.015309;
					    var valor_renta = 0;//variable comun
					    var aporte = remuneracion * PaporteAFP;//lo q cada mes aporta a su fondo
					    var TREA = 0;///varianble comun
					    var contador3 = 1;
							var varparacomision = 0;
							var fondo_ii = 0;
							/****************END Variables**********************/

							console.log(self.mothEarnIt);
							console.log("remuneracion:"+remuneracion);
							console.log("cantidadAniosDeTrbajo:"+cantidadAniosDeTrbajo);
							console.log("TEM:"+TEM);
							console.log("prima:"+prima);
							console.log("PcomisionAFP:"+PcomisionAFP);
							console.log("remuneracion:"+remuneracion);



							for (var i = 0; i < cantidadAniosDeTrbajo; i++){
								fondo_i = fondo;//utilizamos la variable fondo_i para ver luego del anio cuanto a crecido el fondo...cada anio el fondo inicial cambia obviamente
								varparacomision = 0;
								fondo_ii = 0;
								anio += 1;//no se que mierda es esto, lo puso johan pero creo q ni se usa jaja salu2
								for (var j = 0; j < 12; j++){
									//console.log("-------------------------INICIO MES------------------------------");
									fondo_ii = fondo;//solo hago esto para guardar el valor del fondo al inicio del mes
									//console.log("fondo: " + fondo);
									//console.log("aporte: " + aporte);
									//console.log("left: " + (fondo + aporte));
									//console.log("right: " + (1 + TEM));
									fondo = (fondo + aporte)*(1 + TEM);//cada mes se agrega un porcentaje y un dinero por su salario
									//console.log("uno: " + fondo);
									fondo = fondo - (fondo*prima);//se le descuenta la priam q es un valor que se supone el usuario ingresara
									//console.log("dos: " + fondo);
									comisionAFP = PcomisionAFP * fondo;//comision afp se cobra todos los anios y sera fijo ingresado por el usuario
									//console.log("comisionAFP: " + comisionAFP);
									fondo = fondo - comisionAFP;//al fondo se le quita la comision q le cobran anualmente
									//console.log("tres: " + fondo);
									//cout << "MES " << j + 1 << " Anio " << i + 1 << " = " << fondo << " Remuneracion : "<<remuneracion<<" Aporte : " << aporte<<endl;
									sumatoria += ((fondo - fondo_ii) / Math.pow((1 + cok), contador3));//calculo de un termino de la sumatoria del VAN
									//console.log("sumatoria: " + sumatoria);
								  contador3++;
									varparacomision += comisionAFP;
									//console.log("-------------------------FIN MES------------------------------");
								}
								//
								rentabilidad = ((fondo - fondo_i)/fondo_i)*100;//pura formula
								if(!isFinite(rentabilidad)){
									rentabilidad = 0;
								}
								//
								//
								valor_renta = fondo - fondo_i;//puraformula
								//
								//aqui sacas fondo acumulado y varparacomision en ultima columna
								//se imprimen los valores por anio

								self.arrTableView.push({
									year: '' + anio,
									remuneration: '' + remuneracion,
									paidToAfp: '' + parseFloat(aporte).toFixed(2),
									rateProfitability: '' + parseFloat(valor_renta).toFixed(2),
									profitability: '' + parseFloat(rentabilidad).toFixed(2) + "%",
									accumulatedFund: '' + parseFloat(fondo).toFixed(2),
									commission: '' + parseFloat(varparacomision).toFixed(2)
								});

							}

							//var valor3 = cantidadAniosDeTrbajo * 360.00;
					    //var valor = 360.00 / valor3;
					    //var valor2 = fondo/ 800.00;
					    //TREA = (Math.pow(fondo / 800, valor) - 1) * 100; //esto es pura formula, desglozamos la formula del doc word pq habian errores de casteo >_<

							//self.aditionalData.trea = parseFloat(TREA).toFixed(2);
							self.aditionalData.trea = "TIR%";
							self.aditionalData.van =  parseFloat(sumatoria).toFixed(2);


							//Reset
							self.arrObjFondosPersonalizados = [];
							//You can download table on excel
							self.canIDownloadTableInExcel = true;

						$('html, body').animate({
				        scrollTop: $("#results").offset().top
				    }, 500);

					};
					/*************************************************************END CALCULO DE DATOS**********/
					/*************************************************************Login y Registro**********/

					//General users status
					self.userActionState = 2; //login = 1.....register=2....userAlredyLoggged=3
					//Register variables
					self.emailRegister = "";
					self.passwordRegister = "";
					self.namesRegister = "";
					self.lastNameRegister = "";
					//Login Variables
					self.emailLogin = "";
					self.passwordLogin = "";
					//warningMessages LOGIN!
					self.showEmailLoginWarning = false;
					self.showPasswordLoginWarning = false;
					//warningMessages REGISTER
					self.showEmailRegisterWarning = false;
					self.showNameRegisterWarning = false;
					self.showLastNameRegisterWarning = false;
					self.showPasswordRegisterWarning = false;
					//InputPatterns
					self.textPatten = "^[a-zA-Z ]*$";
					self.emailPatten = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";


					var changeSettingAfterUserLoggedIn = function(){
						self.userActionState = 3;
					};
					var changeSettingAfterUserLoggedOut = function(){
						self.userActionState = 1;
					};

					//Check si hay sesion?
					(function(){

						console.log($cookies.getObject('user'));

						if($cookies.getObject('user')){
							changeSettingAfterUserLoggedIn();
						}else{
							changeSettingAfterUserLoggedOut();
						}

					})();


					self.logOutRequest = function(){
						$cookies.remove('user');
						changeSettingAfterUserLoggedOut();

						/*
	            if(!$cookies.getObject('user')){
	              return;
	            }
							console.log($cookies.getObject('user').token);
							console.log(Usuario);
	            Usuario
	              .logout({
									'id': $cookies.getObject('user').token
								})
	              .$promise
	              .then(function(results) {
	                console.log(results);

	              })
	              .catch(function(err){
	                console.log(err);
	                swal({
	                 title: "Ops",
	                 type: 'error',
	                 timer: 2000,
	                 showConfirmButton: false
	                });
	              });
						*/
					};


					//ONCHANGE Login
					self.checkEmailLoginInput = function(){
						self.showEmailLoginWarning = checkRegexInput(self.emailLogin,self.showEmailLoginWarning,self.emailPatten);
					};

					self.checkPasswordLoginInput = function(){
						self.showPasswordLoginWarning = checkRegexInput(self.passwordLogin,self.showPasswordLoginWarning,self.textPatten);
						if(self.passwordLogin == ""){
							self.showPasswordLoginWarning = true;
						}
					};

					//ONCHANGE REgister
					self.checkEmailRegisterInput = function(){
							self.showEmailRegisterWarning = checkRegexInput(self.emailRegister,self.showEmailRegisterWarning,self.emailPatten);
					};

					self.checkNameRegisterInput = function(){
							self.showNameRegisterWarning = checkRegexInput(self.namesRegister,self.showNameRegisterWarning,self.textPatten);
							if(self.namesRegister == ""){
								self.showNameRegisterWarning = true;
							}
					};

					self.checkLastNameRegisterInput = function(){
							self.showLastNameRegisterWarning = checkRegexInput(self.lastNameRegister,self.showLastNameRegisterWarning,self.textPatten);
							if(self.lastNameRegister == ""){
								self.showLastNameRegisterWarning = true;
							}
					};

					self.checkPasswordRegisterInput = function(){
						self.showPasswordRegisterWarning = checkRegexInput(self.passwordRegister,self.showPasswordRegisterWarning,self.textPatten);
						if(self.passwordRegister == ""){
							self.showPasswordRegisterWarning = true;
						}
					};

					var checkRegexInput = function(pString,pStringWarning,pType){
						var regex = new RegExp(pType);
						if(!regex.test(pString)){
							return true;
						}else{
							return false;
						}
					};
					//LOGIN REQUEST
					self.loginRequest = function(){
						self.checkEmailLoginInput();
						self.checkPasswordLoginInput();

						console.log(self.showEmailLoginWarning);
						console.log(self.showPasswordLoginWarning);

						//checking fields
						if(!self.showEmailLoginWarning &&
							 !self.showPasswordLoginWarning){

								 Usuario
                 .login({
                   email: self.emailLogin,
                   password: self.passwordLogin
                 })
                 .$promise
                 .then(function(response){
 									console.log(response);
                   if(response.id){
                     swal({
                      title: "Bienvenido!",
                      type: 'success',
                      timer: 1500,
                      showConfirmButton: false
                     });
 										 $cookies.remove('user');
                     $cookies.putObject('user',{
                       token: response.id
                     });
										 console.log($cookies.getObject('user'));
										 changeSettingAfterUserLoggedIn();
                   }else{
 										if(response.statusCode == 403){
 	                    swal({
 	                     title: "Contraseña incorrecta",
 	                     type: 'error',
 	                     timer: 2000,
 	                     showConfirmButton: false
 	                    });
 	                  }else if(response.statusCode == 404){
 	                    swal({
 	                     title: "El email no se encuentra registrado",
 	                     type: 'error',
 	                     timer: 2000,
 	                     showConfirmButton: false
 	                    });
 	                  }else {
 	                    swal({
 	                     title: "Ocurrio un Problema interno",
 	                     type: 'error',
 	                     timer: 2000,
 	                     showConfirmButton: false
 	                    });
 	                  }
 									}
                 })
                 .catch(function(err){
                   //err.data.error.status: 401
                   //err.data.error.message: "WRONG_PASSWORD"
                   //err.data.error.status: 404
                   //err.data.error.message: "EMAIL_DONT_EXIST"
 									console.log("err al login");
                   console.log(err);
                   if(err.data.error.statusCode == 401){
                     swal({
                      title: "Contraseña incorrecta",
                      type: 'error',
                      timer: 2000,
                      showConfirmButton: false
                     });
                   }else if(err.data.error.statusCode == 404){
                     swal({
                      title: "El email no se encuentra registrado",
                      type: 'error',
                      timer: 2000,
                      showConfirmButton: false
                     });
                   }else {
                     swal({
                      title: "Ocurrio un Problema interno",
                      type: 'error',
                      timer: 2000,
                      showConfirmButton: false
                     });
                   }
                 });




								 //////////////////////////
							}
					};
					//REGISTER!!!! REQUEST
					self.registeringRequest = function(){
						self.checkEmailRegisterInput();
						self.checkNameRegisterInput();
						self.checkLastNameRegisterInput();
						self.checkPasswordRegisterInput();

						//checking fields
						if(!self.showEmailRegisterWarning &&
							 !self.showNameRegisterWarning &&
							 !self.showLastNameRegisterWarning &&
							 !self.showPasswordRegisterWarning){

								 self.emailRegister
								 self.passwordRegister
								 self.namesRegister
								 self.lastNameRegister


							Usuario
							.create({
							  nombre: self.namesRegister,
							  apellido: self.lastNameRegister,
							  email: self.emailRegister,
								password: self.passwordRegister
							})
							.$promise
							.then(function(response){
								console.log(response);
								if(response.token){
									$cookies.remove('user');
									$cookies.putObject('user',{
										token: response.token
									});

									swal({
									 title: "Felicitaciones.",
									 type: 'success',
									 showConfirmButton: true
									});

									changeSettingAfterUserLoggedIn();

								}
							})
							.catch(function(err){
								console.log(err);
								if(err.data.error.status == 422){
										swal({
										 title: "El email ya se encuentra registrado",
										 type: 'error',
										 timer: 2000,
										 showConfirmButton: false
										});
									}else {
										swal({
										 title: "Ocurrio un Problema interno",
										 type: 'error',
										 timer: 2000,
										 showConfirmButton: false
										});
									}
							});

						}
					};

					/*************************************************************END Login y Registro**********/

					//Show dates on time line
					self.validDateInitWork();

					//export to excel
					self.exportToExcel=function(tableId){

						if(self.canIDownloadTableInExcel){
							var exportHref=Excel.tableToExcel(tableId,'sheet name');
							console.log(exportHref);
							$timeout(function() {
								var link = document.createElement('a');
								link.download = "CalculosAFP.xls";
								link.href = exportHref;
								link.click();
							}, 1000);
						}else{
							errorMessages("Cuidado","Primero debes realizar los calculos");
						}
        	}








			}]);
})(window.angular);
