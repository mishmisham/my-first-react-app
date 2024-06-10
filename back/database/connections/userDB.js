import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

import { userTable } from './schema/userTable.js';
import { userSessionTable } from './schema/userSessionTable.js';
import { userAccessListTable } from './schema/userAccessListTable.js';
import { accessGroupTable } from './schema/accessGroupTable.js';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: './database/db/users.sqlite'
});

export const userDB = {
  Sequelize,
  sequelize,
  data: {
    users: {
      content: userTable(sequelize),
      session: userSessionTable(sequelize),
    },
    accessList: {
      users: userAccessListTable(sequelize),
      groups: accessGroupTable(sequelize),
    },
  }
}