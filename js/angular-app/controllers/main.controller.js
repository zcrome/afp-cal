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
					self.userBornDate = new Date();

					/***************************************************************END Personal DATA*****/

					/*************************************************************REMUNERATION VARIABLES**********/
					//self.dateRetirement = null;
					self.typeRemuneration = 2;
					/********type 1 Remuneracion constante*****/
					self.mothEarnIt = 0;
					self.cantPaymentPerYear = null;
					/******** END type 1 Remuneracion constante*****/

					/******* type 2 remuneracion intermitente *****/
					self.dateAtInitWork = null;
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
								self.dateAtInitWork = null;
							}
						}else{
							console.log("Es necesario la fecha de nacimiento");
							self.dateAtInitWork = null;
						}
						$('#remu-end').html(moment(new Date(self.dateAtInitWork)).add(+$('#display-3')[0].innerHTML, 'y').format('D MMM YYYY'));
					};

					self.agregateNewRemuneration = function(){
						
						//Check if objRemuneration is valid
						if(!objRemunerationIsValid(self.objRemuneration)){              
							return;
						}
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
            console.log("before");
            console.log(self.arrRemunerations);
            self.arrRemunerations = _.sortBy(self.arrRemunerations, 'dateBegin');
            console.log("after");
            console.log(self.arrRemunerations);


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
							return false;
						}
						if(moment(new Date(objParam.dateBegin)).isBefore(moment(new Date(self.dateAtInitWork)))){
							console.log("fecha de inicio debe ser posterior a la fecha inicio trabajo");
							return false;
						}
						if(moment(new Date(objParam.dateEnd)).isAfter(moment(new Date($('#remu-end')[0].innerHTML)))){
							console.log("La fecha de termino debe ser anterior a " +  $('#remu-end')[0].innerHTML);
							return false;
						}
						return true;
					};

					var checkObjRemunerationDateConflictInArray = function(){
						self.arrRemunerations.forEach(function(arrayItem){
							if(moment(new Date(self.objRemuneration.dateBegin)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd))||
								moment(new Date(self.objRemuneration.dateEnd)).isBetween(new Date(arrayItem.dateBegin), new Date(arrayItem.dateEnd))||
								moment(new Date(arrayItem.dateBegin)).isBetween(new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))||
								moment(new Date(arrayItem.dateEnd)).isBetween( new Date(self.objRemuneration.dateBegin), new Date(self.objRemuneration.dateEnd))) {
                console.log("conflicto con los periodos existentes");
								return false;
							}						
						});
            return true;
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

          /*PENDIENTE*/
          var fixEmptySpacesObjRemunerationDateInArray = function(){
            var tempArray = angular.copy(self.arrRemunerations);
            tempArray.forEach(function(arrayItem, index){              
            });
          };

					self.deleteRemu = function(index){
						if (index > -1) {
						    self.arrRemunerations.splice(index, 1);
						    updateTimeLineTagsView();
						}
					};


					/******* END type 2 remuneracion intermitente *****/
					/************************************************************************* END REMUNERATION VARIABLES**********/



			}]);
})(window.angular);
