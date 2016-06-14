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
							errorMessages("Cuidado","La fecha de inicio debe ser posterior a la de fin");
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





















			}]);
})(window.angular);
