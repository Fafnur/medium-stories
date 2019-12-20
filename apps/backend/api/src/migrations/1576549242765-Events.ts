import { MigrationInterface, QueryRunner } from 'typeorm';

export class Events1576514027582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const users = await queryRunner.query(`SELECT id FROM users where username = 'admin'`);
    const userId = users[0].id;
    const images: any[] = await queryRunner.query(`SELECT * FROM medias where src LIKE 'image-%'`);
    const imagesIds = images.map(image => image.id);
    await queryRunner.query(`
        INSERT INTO events (body, start, "end", published, title, place, "ownerId", "imageId")
        VALUES 
        ('{"en":"Competition in the fifth round of the season of Lamborghini Super Trofeo North America will take place at the most famous Californian raceway.", "ru": "Соревнования в пятом туре сезона Lamborghini Super Trofeo North America пройдут на самой известной калифорнийской гоночной трассе."}',
        '2019-07-13 00:00:00.000000', '2019-07-14 00:00:00.000000',
         true, '{"en":"SUPER TROFEO NORTH AMERICA 2019", "ru":"SUPER TROFEO NORTH AMERICA 2019"}',
        '{"en":"ROUND 5: LAGUNA SECA", "ru":"РАУНД 5: ЛАГУНА СЕКА"}', ${userId}, ${imagesIds[0]}),

       ('{"en":"A historic appointment for the Lamborghini Super Trofeo Europe is the race in Spa-Francorchamps in conjunction with the famous 24 Hours.", "ru": "Историческое событие для Lamborghini Super Trofeo Europe - гонка в Спа-Франкоршам со знаменитыми 24 часами."}',
        '2019-07-26 00:00:00.000000', '2019-07-27 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 4: Spa-Francorchamps", "ru":"Раунд 4: Спа-Франкоршам"}', ${userId}, ${imagesIds[0]}),

       ('{"en":"Elkhart Lake, in the heart of the United States, is the site for the third round of the Lamborghini Super Trofeo North America.", "ru": "Озеро Элкхарт, в самом сердце Соединенных Штатов, является местом для третьего раунда Lamborghini Super Trofeo North America."}',
        '2019-08-03 00:00:00.000000', '2019-08-04 00:00:00.000000',
        true, '{"en":"Super Trofeo North america 2019", "ru":"Super Trofeo North america 2019"}',
        '{"en":"Round 3: Американская дорога", "ru":"Раунд 3: Спа-Франкоршам"}', ${userId}, ${imagesIds[1]}),
       ('{"en":"Following Inje in 2013, the Lamborghini Super Trofeo Asia returns to South Korea for the fourth round of the championship.", "ru": "После Inje в 2013 году Lamborghini Super Trofeo Asia возвращается в Южную Корею для четвертого тура чемпионата."}',
        '2019-08-03 00:00:00.000000', '2019-08-04 00:00:00.000000',
        true, '{"en":"Super Trofeo Asia 2019", "ru":"Super Trofeo Asia 2019"}',
        '{"en":"Round 4: Yeongam", "ru":"Раунд 4: Йонам"}', ${userId}, ${imagesIds[2]}),
       ('{"en":"The Super Trofeo North America returns to the east coast for the next-to-last round of the North American series.", "ru": "Super Trofeo North America возвращается к восточному побережью для предпоследнего раунда североамериканской серии."}',
        '2019-08-24 00:00:00.000000', '2019-08-25 00:00:00.000000',
        true, '{"en":"Super Trofeo North america 2019", "ru":"Super Trofeo North america 2019"}',
        '{"en":"Round 4: Virginia international raceway", "ru":"Раунд 4: Международная гоночная трасса Вирджиния"}',
        ${userId}, ${imagesIds[3]}),

       ('{"en":"The fifth and final round of the Lamborghini Super Trofeo Asia will be held at the Shanghai International Circuit.", "ru": "Пятый и последний раунд Lamborghini Super Trofeo Asia пройдет на Международной трассе Шанхая."}',
        '2019-08-31 00:00:00.000000', '2019-09-01 00:00:00.000000',
        true, '{"en":"Super Trofeo Asia 2019", "ru":"Super Trofeo Asia 2019"}',
        '{"en":"Round 5: Shanghai", "ru":"Раунд 5: Шанхай"}', ${userId}, ${imagesIds[4]}),

       ('{"en":"The GP Strecke hosts the next-to-last round of the Super Trofeo Europe 2019.", "ru": "GP Strecke принимает предпоследний раунд Super Trofeo Europe 2019."}',
        '2019-08-31 00:00:00.000000', '2019-09-01 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 5: Nürburgring", "ru":"Раунд 5: Нюрбургринг"}', ${userId}, ${imagesIds[5]}),

       ('{"en":"Competition in the fifth round of the season of Lamborghini Super Trofeo North America will take place at the most famous Californian raceway.", "ru": "Соревнования в пятом туре сезона Lamborghini Super Trofeo North America пройдут на самой знаменитой калифорнийской гоночной трассе."}',
        '2019-09-14 00:00:00.000000', '2019-09-15 00:00:00.000000',
        true, '{"en":"Super Trofeo North America 2019", "ru":"Super Trofeo North America 2019"}',
        '{"en":"Round 5: Laguna Seca", "ru":"Раунд 5: Лагуна Сека"}', ${userId}, ${imagesIds[6]}),

       ('{"en":"<p>Design, culture and 300 kilometers of exquisite landscapes are the key words of “Lamborghini & Design – Concorso d’eleganza”, now in its second edition.</p><p>This year’s event will take place September 19-21, culminating with the award to the most elegant Lamborghini.</p><p>The journey begins in Venice, one of the most beautiful cities in the world, with its canals and palaces, true jewels of Italian art history, and finishes closed to Trieste, the “little Vienna on the sea”, a fascinating intermingling of architectural styles and cultures, the Concorso will take place.</p><p><strong>CONCIERGE</strong><br />Tel. +39 02 39884988<br />E-mail: concierge@lamborghini-design.com<br /><a href="/">“Lamborghini & Design - Concorso d’Eleganza”</a></p>", "ru": "<p>Дизайн, культура и 300 километров изысканных ландшафтов - вот ключевые слова «Lamborghini & Design - Concorso d’eleganza», которая теперь выходит во втором издании.</p><p>В этом году мероприятие состоится 19-21 сентября, кульминацией которого станет награда самого элегантного Lamborghini.</p><p>Путешествие начинается в Венеции, одном из самых красивых городов в мире, с его каналами и дворцами, настоящими жемчужинами истории итальянского искусства, и заканчивается рядом с Триестом, «маленькой Веной на море», захватывающим сочетанием архитектурных стилей. и культуры, состоится Конкорс.</p><p><strong>CONCIERGE</strong><br />Tel. +39 02 39884988<br />E-mail: concierge@lamborghini-design.com<br /><a href="/">“Lamborghini & Design - Конкурс элегантности”</a></p>"}',
        '2019-09-19 00:00:00.000000', '2019-09-21 00:00:00.000000', true,
        '{"en":"Lamborghini & design concorso deleganza", "ru":"Lamborghini & дизайнерский конкурс элегантности"}',
        null, ${userId}, ${imagesIds[7]}),

       ('{"en":"For the first time, the Lamborghini Super Trofeo Europe will race in the land of Andalusia, with competition in the sixth and final round of the season leading up to the Lamborghini World Final 2019.","ru": "Впервые Lamborghini Super Trofeo Europe примет участие в гонке на земле Андалусии, где будут соревноваться в шестом и последнем раунде сезона, ведущем к финалу Lamborghini World 2019."}',
        '2019-10-24 00:00:00.000000', '2019-10-25 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 6: Jerez de la Frontera", "ru":"Раунд 6: Херес де ла Фронтера"}', ${userId}, ${imagesIds[8]}),

       ('{"en":"The Lamborghini World Final returns to Spain for the third time following Navarra 2012 and Valencia 2016. This year, Jerez de la Frontera is the host site for the most important Lamborghini event of the season.", "ru": "Мировой финал Lamborghini возвращается в Испанию в третий раз после Navarra 2012 и Valencia 2016. В этом году Херес-де-ла-Фронтера является местом проведения самого важного события Lamborghini сезона."}',
        '2019-10-26 00:00:00.000000', '2019-10-27 00:00:00.000000',
        true, '{"en":"Super Trofeo World Final 2019", "ru":"Super Trofeo World Final 2019"}',
        '{"en":"World final: Jerez de la Frontera", "ru":"Мировой финал: Херес де ла Фронтера"}', ${userId},
        ${imagesIds[9]});
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        DELETE
        FROM events
        WHERE "imageId" LIKE 'image-%';
    `);
  }
}
