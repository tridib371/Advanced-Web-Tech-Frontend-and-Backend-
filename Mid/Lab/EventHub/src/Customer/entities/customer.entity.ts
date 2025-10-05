
import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Customer {
  @PrimaryColumn()
  id: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'varchar', nullable: true })
  fullName: string | null;

  @Column('bigint', { unsigned: true })
  phone: number;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
