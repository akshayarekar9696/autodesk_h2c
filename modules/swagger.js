const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
	swaggerDefinition: {
		info: {
			title: 'test',
			version: '1.0.0',
			description: 'API - LIst',
		},
		host: 'https://autodesk-h2c.onrender.com',
		basePath: '/'
	},
	apis: ['./routes/*.js', '/swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
	swaggerUi,
	specs
};
