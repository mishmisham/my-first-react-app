import { DataTypes } from '@sequelize/core';

export const accessGroupTable = (sequelize) => {
    const accessGroup = sequelize.define('access_group', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: 'new access group'
		},
    });

    return accessGroup;
}