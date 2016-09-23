app.controller('topicController', ['$scope', '$cookies', '$location', '$routeParams','discussionsFactory', function($scope, $cookies, $location, $routeparams,discussionsFactory){
	console.log('Welcome to hell')
	var index = function(){
		discussionsFactory.posts($routeparams, function(data){
			console.log('Posts Data:', data)
			$scope.posts = data
		});
		discussionsFactory.showonetopic($routeparams, function(data){
			console.log('Topic Data: ', data)
			$scope.topics = data
		});
		discussionsFactory.comments(function(data){
			console.log('Comment Data: ', data)
			$scope.comments = data
		})

	}
	$scope.newpost = function(post){
		post.user = $cookies.get('userid');
		post.topic = $routeparams.id
		discussionsFactory.newpost(post);
		index();
	}
	$scope.newcomment = function(comment, postId){
		comment.user = $cookies.get('userid');
		comment.post = postId;
		discussionsFactory.newcomment(comment);
		index();
	}
	$scope.vote = function(postId, choice){
		console.log(postId, choice);
		var obj = {id: postId, choice: choice}
		discussionsFactory.vote(obj);
		index();
	}
	index();
}])