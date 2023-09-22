const jwt = require('jsonwebtoken');

var util = {
	generateAccessToken: function (username) {
		const accessToken = jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '3600s'});
		const refreshToken= jwt.sign(username, process.env.REFRESH_TOKEN_SECRET)
		return {accessToken:accessToken , refreshToken:refreshToken}
	},
	authenticateToken: function (req, res, next) {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		if (token == null) return res.sendStatus(401);
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			console.log(err);
			if (err) return res.sendStatus(403);
			req.user = user;
			next()
		})
	}
};

module.exports = util;
