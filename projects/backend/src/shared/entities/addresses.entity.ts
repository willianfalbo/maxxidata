import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CountryCodeEnum } from '../enums/country.enum';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 50 })
  street: string;

  @Column({ nullable: false })
  number: number;

  @Column({ nullable: false, length: 30 })
  city: string;

  @Column({ nullable: false, length: 3 })
  state: string;

  @Column({ name: 'postal_code', nullable: false, length: 20 })
  postalCode: string;

  @Column({ nullable: false, type: 'enum', enum: CountryCodeEnum })
  country: CountryCodeEnum;
}
