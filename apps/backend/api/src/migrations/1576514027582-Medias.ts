import { MigrationInterface, QueryRunner } from 'typeorm';

export class Medias1576549242765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const users = await queryRunner.query(`SELECT id FROM users where username = 'admin'`);
    const userId = users[0].id;
    await queryRunner.query(`
      INSERT INTO medias (published, src, "ownerId") 
      VALUES (true, 'image-1.webp', ${userId}), (true, 'image-2.jpg', ${userId}), (true, 'image-3.webp', ${userId}),
             (true, 'image-4.webp', ${userId}), (true, 'image-5.webp', ${userId}), (true, 'image-6.jpg', ${userId}),
             (true, 'image-7.webp', ${userId}), (true, 'image-8.jpg', ${userId}), (true, 'image-9.jpg', ${userId}),
             (true, 'image-10.jpg', ${userId});
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DELETE FROM medias WHERE src LIKE 'image-%';
    `);
  }
}
