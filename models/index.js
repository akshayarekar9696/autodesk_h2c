/* sequelize\models\index.js */
const Sequelize = require('sequelize');
const db = {};
console.log(process.env.HOST)
const sequelize = new Sequelize(
	'employeesDB','admin','admin123', {
		host: 'employees.coc6unijjedr.eu-north-1.rds.amazonaws.com',
		dialect: 'mysql',
		port: 3306,
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
	}
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require('./Employee')(sequelize, Sequelize);
db.employeeAddress = require('./EmployeeAddress')(sequelize, Sequelize);
db.employeeAddress.belongsTo(db.employee, { foreignKey: "EMP_UUID", targetKey: "EMP_UUID" })
db.employee.hasMany(db.employeeAddress, {
	foreignKey: { name: 'EMP_UUID', allowNull: true },
	sourceKey: 'EMP_UUID',
	onDelete: "CASCADE",
	onUpdate: "CASCADE"
})

module.exports = db;  // export the Db  -- >>
