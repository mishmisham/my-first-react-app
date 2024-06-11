import { DataTypes } from '@sequelize/core';

export const AccessGroup = (sequelize) => {
    const accessGroup = sequelize.define('access_group', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: 'New access group'
		},
    });

	accessGroup.associate = function (models) {
		accessGroup.hasMany(models.UserAccessList, {
			foreignKey: 'group_id',
			as: 'users'
		});
	};

    return accessGroup;
}