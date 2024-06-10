import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

import { userTable } from './models/userTable.js';
import { userSessionTable } from './models/userSessionTable.js';
import { userAccessListTable } from './models/userAccessListTable.js';
import { accessGroupTable } from './models/accessGroupTable.js';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: './src/db/db.sqlite'
});

export const db = {
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