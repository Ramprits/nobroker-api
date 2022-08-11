import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import RoleEntity from '@v1/roles/schemas/role.entity';

@Entity('users')
export default class UserEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn("uuid")
  readonly id: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  readonly password: string = '';

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  readonly email: string = '';

  @ApiProperty({ type: Boolean })
  @Column()
  readonly verified: boolean = false;

  @ManyToMany(() => RoleEntity, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_roles',
  })
  readonly roles!: RoleEntity[]

  constructor(partial?: Partial<UserEntity>) {
    Object.assign(this, partial)
  }

}
