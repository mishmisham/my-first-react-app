import { DataTypes } from '@sequelize/core';
export const userTable = (sequelize) => {
    const user = sequelize.define('users', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
        email: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
        password: {
			type: DataTypes.STRING,
			defaultValue: ''
		},
    })

    return user;
}