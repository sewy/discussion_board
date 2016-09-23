var discussions = require('../controllers/discussions.js');
module.exports = function(app){
	app.get('/example', discussions.index);
	app.post('/newuser', discussions.createUser);
	app.post('/newtopic', discussions.createTopic);
	app.get('/showtopics', discussions.showtopics);
	app.get('/topic/:id', discussions.showonetopic);
	app.post('/newpost', discussions.createpost);
	app.get('/posts/:id', discussions.showposts);
	app.post('/newcomment', discussions.createcomment);
	app.get('/comments', discussions.showcomments);
	app.get('/user/:id', discussions.showuser);
	app.post('/ratepost', discussions.ratepost);
}