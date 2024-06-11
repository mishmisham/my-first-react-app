import { DataTypes } from '@sequelize/core';
export const User = (sequelize) => {
    const user = sequelize.define('users', {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
		},
		{
			defaultScope: {
				rawAttributes: { 
					exclude: ['password'] 
				},
			},
		},
		{
			hooks: {
				beforeCreate: async (userObject) => {
					userObject.password = await userObject.generatePasswordHash();
				},
			},
			sequelize,
		}
	)

	user.prototype.generatePasswordHash = function () {
		if (this.password) {
			return bcrypt.hash(this.password, 10);
		}
	};

	user.associate = function (models) {
		user.hasMany(models.UserAccessList, {
			foreignKey: 'user_id',
			as: 'access'
		});
		user.hasMany(models.UserSession, {
			foreignKey: 'user_id',
			as: 'sessions'
		});
	};

    return user;
}
