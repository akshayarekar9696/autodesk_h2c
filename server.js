var express = require('express');
var app = express();
const {swaggerUi, specs} = require('./modules/swagger');
var mysql = require("mysql2/promise");
var bodyParser = require('body-parser');
const cors =  require('cors') // this is added cors into the express-app

var mytestServices = require('./routes/Employee');

app.use(cors())
app.use('/v1.0/employee', mytestServices);

app.use(bodyParser.urlencoded({limit: '100mb', extended: false}));
//app.use(bodyParser.json());
//------------------------------------------------------------------------
app.use(bodyParser.json({limit: '100mb'}));

// -------------------------- SERVER SETUP _________>>>>>>>.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//----- SQUELIZE mAPPEER ------------
var pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USERNAME2,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	dateStrings: process.env.DATESTRINGS
});
var sequelize = require('./models').sequelize;
sequelize.sync();

// =================
app.listen(process.env.SERVER_PORT || 9000, function () {
	console.log('Server started: ' + (process.env.SERVER_PORT || 9000));
});
