import { DataTypes } from '@sequelize/core';
export const userSessionTable = (sequelize) => {
    const user = sequelize.define('user_session', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        access_token: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
        refresh_token: {
			type: DataTypes.STRING,
			defaultValue: ''
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
			defaultValue: ''
		},
    })

    return user;
}