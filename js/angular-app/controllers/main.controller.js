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

					/********Personal DATA*****/
					self.userName = null
					self.userEmail = null;
					self.userBornDate = null;


					/********END Personal DATA*****/

					/**********REMUNERATION VARIABLES**********/
					self.dateRetirement = null;
					self.typeRemuneration = 2;
					/********type 1 Remuneracion constante*****/
					self.mothEarnIt = 0;
					self.cantPaymentPerYear = null;
					/******** END type 1 Remuneracion constante*****/

					/******* type 2 remuneracion intermitente *****/
					self.ageAtInitWork = null;
					self.arrRemunerations = [];
					self.objRemuneration = {
						remunerationCant: 1500,
						dateBegin: null,
						dateEnd: null
					};

					


					self.agregateNewRemuneration = function(){

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
						if(moment(new Date(objParam.dateBegin)).isAfter(moment(new Date(objParam.dateEnd)))){
							console.log("fecha de inicio debe ser anterior a la de fin");
							return false;
						}
						return true;
					};

					var checkObjRemunerationDateConflictInArray = function(){

					};


					/******* END type 2 remuneracion intermitente *****/
					/********** END REMUNERATION VARIABLES**********/


					// Semantic UI Range
					$('#range-3').range({
							min: 20,
							max: 75,
							start: 65,
							onChange: function(value) {
									$('#display-3').html(value);
									self.dateRetirement = value;
							}
					});
			}]);
})(window.angular);
