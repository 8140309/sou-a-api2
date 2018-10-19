var jwt = require('jsonwebtoken');

 app.post('/login', (req, res) => {
	 const user = { username, password } = req.body;
	 if (username === 'admin' && password === '123456') {
		 jwt.sign({ user }, 'secret_key_goes_here', { expiresIn: '1h' }, (err, token) => {
			 res.json({
				 message: 'Authenticated! Use this token in the Authorization header',
				 token: token
			 });n		 });
	 } else {
		 res.status(401).send('Wrong username and/or password');
	 }
});

 app.all('/api/*', ensureToken, (req, res, next) => {
	 jwt.verify(req.token, 'secret_key_goes_here', function (err, data) {
		 if (err) {
			 res.sendStatus(403);
		 } else {
			 console.log('User: ' + data.user.username);
			next();
		 }
	 });
 });

 function ensureToken(req, res, next) {
	 const bearerHeader = req.headers['authorization'];
	 if (typeof bearerHeader !== 'undefined') {
		 const bearer = bearerHeader.split(' ');
		 const bearerToken = bearer[1];
		 req.token = bearerToken;
		 next();
	 } else {
		 res.sendStatus(403);
	 }
 }