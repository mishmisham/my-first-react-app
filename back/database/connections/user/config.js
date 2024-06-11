import dotenv from 'dotenv';

dotenv.config();

export const envUserDBConfig = {
  development: {
    database: 'users.dev',
    dialect: 'sqlite',
    use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    database: 'users.test',
    dialect: 'sqlite',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    database: 'users.prod',
    dialect: 'sqlite',
    use_env_variable: 'PROD_DATABASE_URL',
  },
};

