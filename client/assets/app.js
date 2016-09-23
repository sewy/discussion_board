var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'indexController'
	});
	$routeProvider.when('/discussionboard',{
		templateUrl: 'partials/dboard.html',
		controller: 'boardController'
	});
	$routeProvider.when('/topic/:id',{
		templateUrl: 'partials/topic.html',
		controller: 'topicController'
	});
	$routeProvider.when('/user/:id',{
		templateUrl: 'partials/user.html',
		controller: 'userController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});