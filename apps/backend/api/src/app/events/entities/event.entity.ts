import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Event, Locale, Media, User } from '@medium-stories/entities';

import { UserEntity } from '../../users/entities/user.entity';
import { MediaEntity } from '../../media/entities/media.entity';

@Entity({
  name: 'events'
})
export class EventEntity implements Event {
  @Column('simple-json')
  body: Locale;

  @CreateDateColumn()
  created: string;

  @Column({ type: 'timestamp' })
  end: number;

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => MediaEntity,
    media => media.events,
    { nullable: true }
  )
  image: Media;

  @ManyToOne(
    type => UserEntity,
    user => user.events,
    {
      onDelete: 'CASCADE'
    }
  )
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
