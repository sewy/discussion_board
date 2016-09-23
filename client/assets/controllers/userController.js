app.controller('userController', ['$scope', '$cookies', '$location', '$routeParams','discussionsFactory', function($scope, $cookies, $location, $routeparams,discussionsFactory){
	var index = function(){
		console.log($routeparams)
		discussionsFactory.showuser($routeparams.id, function(data){
			$scope.user = data;
		})
	}
	index()
}]);