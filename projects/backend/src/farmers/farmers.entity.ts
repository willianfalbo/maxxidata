import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Document } from '../shared/entities/documents.entity';
import { Address } from '../shared/entities/addresses.entity';

@Entity({ name: 'farmer' })
export class Farmer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ name: 'document_id', nullable: false, unique: true })
  documentId: number;

  @OneToOne(type => Document)
  @JoinColumn({ name: 'document_id' })
  document: Document;

  @Column({ name: 'address_id', nullable: false, unique: true })
  addressId: number;

  @OneToOne(type => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;
}
