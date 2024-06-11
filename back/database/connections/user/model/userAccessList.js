import { DataTypes } from '@sequelize/core';
export const UserAccessList = (sequelize) => {
    const userAccessList = sequelize.define('user_access_list', {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		group_id: {
			type: DataTypes.INTEGER,
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
    });

	userAccessList.associate = function (models) {
		userAccessList.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'access'
		});

		userAccessList.belongsTo(models.AccessGroup, {
			foreignKey: 'group_id',
			as: 'group'
		});
	};

    return userAccessList;
}