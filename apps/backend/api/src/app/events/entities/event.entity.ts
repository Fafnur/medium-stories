import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Event, Locale, Media, User } from '@medium-stories/entities';

import { MediaEntity } from '../../media/entities/media.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity({
  name: 'events'
})
export class EventEntity implements Event {
  @Column('simple-json')
  body: Locale;

  @CreateDateColumn()
  created: string;

  @Column({ type: 'timestamp' })
  end: string;

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => MediaEntity,
    media => media.events,
    { nullable: true }
  )
  image: Media;

  @ManyToOne(type => UserEntity)
  owner: User;

  @Column('simple-json', { nullable: true })
  place: Locale;

  @Column()
  published: boolean;

  @Column({ type: 'timestamp' })
  start: string;

  @Column('simple-json')
  title: Locale;

  @UpdateDateColumn({ nullable: true })
  updated: string;
}
