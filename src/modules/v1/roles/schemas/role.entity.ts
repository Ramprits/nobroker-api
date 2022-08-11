import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('roles')
export default class RoleEntity {
  @ApiProperty({ type: String })
  @PrimaryGeneratedColumn('uuid')
  readonly id: string = ''

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  name: string = '';

  constructor(partial?: Partial<RoleEntity>) {
    Object.assign(this, partial)
  }
}
