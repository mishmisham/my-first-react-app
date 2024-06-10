import {db} from './src/db/db.js';
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: false }');
}); 