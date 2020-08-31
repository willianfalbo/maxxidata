import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { DocumentTypeEnum } from '../../shared/enums/document-type.enum';

const tableName = 'document';

export class CreateTableDocument1598650052240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'document_number',
            type: 'varchar',
            isNullable: false,
            length: '50',
            isUnique: true,
          },
          {
            name: 'document_type',
            type: 'varchar',
            isNullable: false,
            length: '50',
          },
        ],
      }),
      true,
    );

    // insert hardcoded documents
    hardcodedDocuments.forEach(async document => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(tableName)
        .values(document)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(tableName);
  }
}

const hardcodedDocuments = [
  // USA
  { documentNumber: '991-78-8867', documentType: DocumentTypeEnum.TIN },
  { documentNumber: '927-74-7146', documentType: DocumentTypeEnum.TIN },
  { documentNumber: '979-84-5137', documentType: DocumentTypeEnum.TIN },
  { documentNumber: '900-90-2437', documentType: DocumentTypeEnum.TIN },
  { documentNumber: '920-94-0167', documentType: DocumentTypeEnum.TIN },
  { documentNumber: '932-90-2967', documentType: DocumentTypeEnum.TIN },
  // GBR
  { documentNumber: 'GB251063539', documentType: DocumentTypeEnum.VAT },
  { documentNumber: 'GB251063594', documentType: DocumentTypeEnum.VAT },
  { documentNumber: 'GB350983637', documentType: DocumentTypeEnum.VAT },
  { documentNumber: 'GB536768742', documentType: DocumentTypeEnum.VAT },
  { documentNumber: 'GB372727045', documentType: DocumentTypeEnum.VAT },
  { documentNumber: 'GB524461265', documentType: DocumentTypeEnum.VAT },
  // BRA
  { documentNumber: '328.109.018-48', documentType: DocumentTypeEnum.CPF },
  { documentNumber: '579.712.449-16', documentType: DocumentTypeEnum.CPF },
  { documentNumber: '939.865.937-99', documentType: DocumentTypeEnum.CPF },
  { documentNumber: '923.221.552-76', documentType: DocumentTypeEnum.CPF },
  { documentNumber: '471.016.345-67', documentType: DocumentTypeEnum.CPF },
  { documentNumber: '987.893.894-84', documentType: DocumentTypeEnum.CPF },
];
