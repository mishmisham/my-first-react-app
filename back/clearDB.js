import { userDB } from './database/connections/userDB.js';
import { faker } from '@faker-js/faker';

const DEMO_LIST_COUNT = 10;

userDB.sequelize.sync({force: true}).then(async () => {

  console.log('Drop and Resync with { force: false }');

  const {
    users, accessList
  } = userDB.data;

  for await(let i of new Array(DEMO_LIST_COUNT)) {

    accessList.groups.create({
      name: faker.commerce.department()
    }).then(accessGroup => {
      users.content.create({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }).then(user => {
        accessList.users.create({
          group_id: accessGroup.id,
          user_id: user.id,
        });
      });
    });
  }
  

}); 