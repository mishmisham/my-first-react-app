import { DataTypes } from '@sequelize/core';
export const UserSession = (sequelize) => {
    const session = sequelize.define('user_session', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
        access_token: {
			type: DataTypes.STRING,
		},
        refresh_token: {
			type: DataTypes.STRING,
		},
		access_expires_in: {
			type: DataTypes.DATE,
		},
		refresh_expires_in: {
			type: DataTypes.DATE,
		},
		issued_at: {
			type: DataTypes.DATE,
		},
		secret: {
			type: DataTypes.STRING,
		},
    },
	{
		defaultScope: {
			rawAttributes: { 
				exclude: ['secret', 'refresh_token'] 
			},
		},
	}
);

	session.associate = function (models) {
		session.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'session' 
		});
	};

    return session;
}