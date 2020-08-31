import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentTypeEnum } from '../enums/document-type.enum';

@Entity({ name: 'document' })
export class Document {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'document_number',
    nullable: false,
    length: 50,
    unique: true,
  })
  documentNumber: string;

  @Column({
    name: 'document_type',
    nullable: false,
    type: 'enum',
    enum: DocumentTypeEnum,
  })
  documentType: DocumentTypeEnum;
}
