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

					//REMUNERATION VARIABLES
					//type 1 Remuneracion constante
					//type 2 remuneracion intermitente
					self.dateRetirement = null;
					self.typeRemuneration = null;
					self.mothEarnIt = 0;
					self.cantPaymentPerYear = null;

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
