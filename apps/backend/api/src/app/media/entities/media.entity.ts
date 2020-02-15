import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Event, Locale, Media, User } from '@medium-stories/entities';

import { EventEntity } from '../../events/entities/event.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity({
  name: 'medias'
})
export class MediaEntity implements Media {
  @CreateDateColumn()
  created: string;

  @Column('simple-json', { nullable: true })
  description: Locale;

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    type => EventEntity,
    event => event.image
  )
  events?: Event[];

  @ManyToOne(
    type => UserEntity,
    user => user.medias,
    {
      onDelete: 'CASCADE'
    }
  )
  owner: User;

  @Column()
  published: boolean;

  @Column()
  src: string;

  @Column('simple-json', { nullable: true })
  title: Locale;

  @UpdateDateColumn({ nullable: true })
  updated: string;
}
