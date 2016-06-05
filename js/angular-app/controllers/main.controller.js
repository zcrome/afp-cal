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
					//self.dateRetirement = null;
					self.typeRemuneration = 2;
					/********type 1 Remuneracion constante*****/
					self.mothEarnIt = 0;
					self.cantPaymentPerYear = null;
					/******** END type 1 Remuneracion constante*****/

					/******* type 2 remuneracion intermitente *****/
					self.dateAtInitWork = null;
					self.dateAtFinishtWork = null;
					self.arrRemunerations = [];
					self.objRemuneration = {
						remunerationCant: 1500,
						dateBegin: null,
						dateEnd: null
					};


					self.validDateInitWork = function(){
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
						if(!objRemunerationIsValid(self.objRemuneration)){
							return;
						}
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
						if(moment(new Date(objParam.dateBegin)).isBefore(moment(new Date(self.dateAtInitWork)))){
							console.log("fecha de inicio debe ser posterior a la fecha inicio trabajo");
							return false;
						}
						if(moment(new Date(objParam.dateEnd)).isAfter(moment(new Date($('#remu-end')[0].innerHTML)))){
							console.log("fecha de inicio debe ser posterior a la fecha inicio trabajo");
							return false;
						}
						return true;
					};

					var checkObjRemunerationDateConflictInArray = function(){

					};


					/******* END type 2 remuneracion intermitente *****/
					/********** END REMUNERATION VARIABLES**********/



			}]);
})(window.angular);
