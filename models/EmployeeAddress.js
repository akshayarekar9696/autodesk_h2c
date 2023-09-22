module.exports = (sequelize, DataTypes) => {
	return sequelize.define('TEST_ADDRESS', {
		add_UUID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		EMP_UUID: {
			type: DataTypes.INTEGER
		},
		emp_zip: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		emp_addr: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		emp_addr2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		emp_addr_type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		mem_loc: {
			type: DataTypes.FLOAT(7,6),
			allowNull: true
		},
	}, {
		freezeTableName: true,
		timestamps: false
	});
};
