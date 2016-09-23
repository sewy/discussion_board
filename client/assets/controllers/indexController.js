app.controller('indexController', ['$scope', '$cookies', '$location', 'discussionsFactory', function($scope, $cookies, $location, discussionsFactory){
	$scope.login = function(user){
		discussionsFactory.newUser(user, function(data){
			console.log('controller:' , data._id);
			$cookies.put('userid', data._id);
		$cookies.put('username', user.name);
		$location.url('/discussionboard');
		});	

	}
}]);