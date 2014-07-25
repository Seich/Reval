(function() {
	var app = angular.module('revalApp', ['ngAnimate', 'ngRoute']);

	app.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/sheet', {
					template: 'Hello',
					controller: ''

				})

				.otherwise({
					redirectTo: '/sheet'
				});

			$locationProvider.html5Mode(false).hashPrefix('!');
		}
	]);
}());