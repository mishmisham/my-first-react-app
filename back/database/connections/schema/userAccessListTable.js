import { DataTypes } from '@sequelize/core';
export const userAccessListTable = (sequelize) => {
    const userAccess = sequelize.define('user_access_list', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		group_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		user_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
    })

    return userAccess;
}