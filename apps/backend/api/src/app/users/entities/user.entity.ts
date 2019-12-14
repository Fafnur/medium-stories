import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '@medium-stories/entities';

@Entity({
  name: 'users'
})
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ length: 50 })
  username: string;
}
