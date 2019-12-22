import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Media, User } from '@medium-stories/entities';

import { EventEntity } from '../../events/entities/event.entity';
import { MediaEntity } from '../../media/entities/media.entity';

@Entity({
  name: 'users'
})
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(
    type => EventEntity,
    event => event.owner
  )
  events?: Event[];

  @OneToMany(
    type => MediaEntity,
    media => media.owner
  )
  medias?: Media[];

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ length: 50, unique: true })
  username: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn({ nullable: true })
  updated: string;
}
