export const environment = {
  production: true,
  jwt: {
    secret: 'MyJWTSecret',
    expiresIn: 15000000
  },
  connection: {
    type: null,
    host: null,
    port: null,
    username: null,
    password: null,
    database: null,
    synchronize: false
  }
};
