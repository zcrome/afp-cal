
(function(angular) {
    'use strict';

    angular
      .module('app',['ngRoute','ngCookies'])
      .config(function($routeProvider){

        $routeProvider
          .when('/',{
              templateUrl: 'index.html',
              controller: 'MainController'
          });
      })
      .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }]);




})(window.angular);
