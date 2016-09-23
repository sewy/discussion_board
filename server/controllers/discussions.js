var mongoose = require('mongoose');
var Users = mongoose.model('User');
var Topics = mongoose.model('Topic');
var Posts = mongoose.model('Post');
var Comments = mongoose.model('Comment');


function discussionsController(){
	this.index = function(req, res){
		console.log('example');
	}
	this.createUser = function(req, res){
		console.log(req.body);
		var user = new Users({name:req.body.name, topics: [], posts: [], comments: []});
		user.save(function(err){
			if(err){
				console.log('Error saving new User');
			}else{
				console.log('New User Created!')
				res.json(user)
			}
		});
	}
	this.createTopic = function(req, res){
		console.log(req.body);
		Users.findOne({_id:req.body.user}, function(err, user){
			var topic = new Topics({topic:req.body.topic, description:req.body.description, category:req.body.category, _user: req.body.user, posts:[]});
			topic.save(function(err){
				user.topics.push(topic);
				user.save(function(err){
					if(err){
						console.log('Error creating topic.');
					}else{
						console.log('New Topic Created!')
					}
				})
			})
		})
		
	}
	this.showtopics = function(req, res){
		console.log('finding topics.............................')
		Topics.find({}).populate('_user').exec(function(err, data){
			if(err){
				console.log('error 505');
			}else{
				console.log(data)
				res.json(data)
			}
		})

	}
	this.showonetopic = function(req, res){
		console.log(req.params)
		Topics.findOne({_id:req.params.id}).populate('posts').populate('_user').exec(function(err, data){
			if(err){
				console.log('error for one topic')
			}else{
				console.log(data)
				res.json(data);
			}
		})
	}
	this.showuser = function(req, res){
		Users.findOne({_id:req.params.id}, function(err, data){
			if(err){
				console.log('could not find user');
			}else{
				res.json(data);
			}
		})
	}
	this.showposts = function(req, res){
		Posts.find({_topic:req.params.id}).populate('_user').exec(function(err, data){
			if(err){
				console.log('error loading posts')
			}else{
				console.log('jsooooooooooooooooooon')
				res.json(data)
			}
		})
	}
	this.showcomments = function(req, res){
		Comments.find({}).populate('_user').exec(function(err, data){
			if(err){
				console.log('Could not find comments')
			}else{
				res.json(data);
			}
		})
	}
	this.createpost = function(req, res){
		console.log(req.body)
		Users.findOne({_id:req.body.user}, function(err, user){
			Topics.findOne({_id:req.body.topic}, function(err, topic){
			var post = new Posts({text:req.body.post, rateup: 0, ratedown: 0, _user:req.body.user, _topic:req.body.topic, comments:[]});
			post.save(function(err){
				user.posts.push(post);
				user.save(function(err){
					topic.posts.push(post)
					topic.save(function(err){
						if(err){
							console.log('Could not save post');
						}else{
							console.log('New Post Created!');
							console.log(post)
						}
					})
				})
				
			})
		})
		})
	}
	this.createcomment = function(req, res){
		console.log(req.body);
		Users.findOne({_id:req.body.user}, function(err, user){
			var comment = new Comments({text:req.body.comment, _user:req.body.user, _post:req.body.post});
			comment.save(function(err){
				user.comments.push(comment);
				user.save(function(err){
					if(err){
						console.log('error saving comment')
					}else{
						console.log('New comment created!')
					}
				})
			})
		})
	}
	this.ratepost = function(req,res){
		console.log(req.body);
		Posts.findOne({_id:req.body.id}, function(err, post){
			if(req.body.choice == 'up'){
				post.rateup += 1;
			}else{
				post.ratedown -= 1;
			}
			post.save(function(err){
				console.log('voted!')
			})
		})
	}
}

module.exports = new discussionsController();