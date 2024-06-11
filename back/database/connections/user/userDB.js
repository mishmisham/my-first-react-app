import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

import { User } from './model/user.js';
import { UserSession } from './model/userSession.js';
import { UserAccessList } from './model/userAccessList.js';
import { AccessGroup } from './model/accessGroup.js';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: './database/db/users.sqlite'
});

export const userDB = {
  Sequelize,
  sequelize,
  data: {
    users: {
      content: User(sequelize),
      session: UserSession(sequelize),
    },
    accessList: {
      users: UserAccessList(sequelize),
      groups: AccessGroup(sequelize),
    },
  }
}