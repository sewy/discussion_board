var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	topics: [{type: Schema.Types.ObjectId, ref:'Topic'}],
	posts: [{type: Schema.Types.ObjectId, ref:'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],
});
var TopicSchema = new mongoose.Schema({
	topic: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	posts: [{type: Schema.Types.ObjectId, ref:'Post' }]
});
var PostSchema = new mongoose.Schema({
	text: {type: String, required: true},
	rateup: {type: Number, required: true},
	ratedown: {type: Number, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
});
var CommentSchema = new mongoose.Schema({
	text: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'}
});
mongoose.model('User', UserSchema);
mongoose.model('Topic', TopicSchema);
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);