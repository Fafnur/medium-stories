export const environment = {
  production: false,
  jwt: {
    secret: 'MyJWTSecret',
    expiresIn: 15000000
  },
  connection: {
    type: 'postgres' as any,
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '123456',
    database: 'medium',
    synchronize: true
  }
};
