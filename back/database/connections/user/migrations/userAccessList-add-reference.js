export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_access_list', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      group_id: {
        type: DataTypes.INTEGER,
        references: {
        	model: {
        	  	tableName: 'access_group',
        	},
        	key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
        	model: {
        	  	tableName: 'users',
        	},
        	key: 'id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};