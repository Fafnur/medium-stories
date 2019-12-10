import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Insert user with
 * username: admin
 * password: 123456
 */
export class BaseUsers1552019794258 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    /* tslint:disable */
    await queryRunner.query(`
      INSERT INTO users (username, email, password) VALUES ('admin', 'example@mail.ru', '$2b$10$s9yj75DUFg0IURV8YTfw3eKdeGhIusdR6vz4WtzcqWCNRHwbuPksa')
      `);
    /* tslint:enable */
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DROP TABLE users;
    `);
  }
}
