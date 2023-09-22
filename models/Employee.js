module.exports = (sequelize, DataTypes) => {
	return sequelize.define('TEST_EMPLOYEE', {
		EMP_UUID: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		empId: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		emp_fname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		emp_lname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		emp_email: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true
		},
		emp_pass: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		emp_mobile: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		gender: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		birth: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		sns_apple_yn: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		sns_google_yn: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		sns_facebook_yn: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		sns_apple_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		sns_google_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		sns_facebook_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		sns_type: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		sns_code: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sns_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		photo_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		photo_type: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		isdel: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: true
		},
		del_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mem_cur_timezone: {
			type:DataTypes.STRING(200),
			allowNull:true
		}
	}, {
		freezeTableName: true,
	});
};
