export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_session', {
      iid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
        	model: {
        	  	tableName: 'users',
        	},
        	key: 'id',
        },
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};