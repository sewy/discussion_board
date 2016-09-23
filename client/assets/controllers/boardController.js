app.controller('boardController', ['$scope', '$cookies', '$location', 'discussionsFactory', function($scope, $cookies, $location, discussionsFactory){
	$scope.user = $cookies.get('username');
	$scope.userid = $cookies.get('userid');
	$scope.newtopic = function(topic){
		topic.user = $scope.userid;
		console.log('!!!topic!!!!!:: ', topic)
		discussionsFactory.newTopic(topic);
		index();
	}
	var index = function(){
		discussionsFactory.topics(function(data){
			console.log(data)
			$scope.topics = data;
		});
	}
	index()
}]);