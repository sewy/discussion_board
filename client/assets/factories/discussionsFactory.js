app.factory('discussionsFactory', ['$http', function($http){
	function discussionsFactory(){
		this.newUser = function(user, callback){
			$http.post('/newuser', user).then(function(returnData){
				callback(returnData.data)
			})
		}
		this.newTopic = function(topic){
			console.log('Factory newtopic: ', topic)
			$http.post('/newtopic', topic);
		}
		this.topics = function(callback){
			$http.get('/showtopics').then(function(returnData){
				callback(returnData.data)
			})
		}
		this.showonetopic = function($routeparams, callback){
			$http.get('/topic/'+$routeparams.id).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.showuser = function(userid, callback){
			$http.get('/user/'+userid).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.posts = function($routeparams, callback){
			$http.get('/posts/'+$routeparams.id).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.comments = function(callback){
			$http.get('/comments').then(function(returnData){
				callback(returnData.data);
			})
		}
		this.newpost = function(post){
			$http.post('/newpost', post);
		}
		this.newcomment = function(comment){
			$http.post('/newcomment', comment);
		}
		this.vote = function(choice){
			console.log(choice)
			$http.post('/ratepost', choice);
		}
	}
	return new discussionsFactory();
}]);