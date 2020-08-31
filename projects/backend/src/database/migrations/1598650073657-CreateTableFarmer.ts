import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

const tableName = 'farmer';
const foreignKeyNameForDocument = 'FK_farmers_documents';
const foreignKeyNameForAddresses = 'FK_farmers_addresses';

export class CreateTableFarmer1598650073657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            length: '100',
          },
          {
            name: 'document_id',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'address_id',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      tableName,
      new TableForeignKey({
        name: foreignKeyNameForDocument,
        columnNames: ['document_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'document',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      tableName,
      new TableForeignKey({
        name: foreignKeyNameForAddresses,
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    );

    // insert hardcoded farmers
    hardcodedFarmers.forEach(async farmer => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(tableName)
        .values(farmer)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey(tableName, foreignKeyNameForDocument);
    await queryRunner.dropForeignKey(tableName, foreignKeyNameForAddresses);
    await queryRunner.dropTable(tableName);
  }
}

const hardcodedFarmers = [
  // USA
  { name: 'Charles K. McBride', documentId: 1, addressId: 1 },
  { name: 'Tammy J. Winters', documentId: 2, addressId: 2 },
  { name: 'Ralph K. Chambers', documentId: 3, addressId: 3 },
  { name: 'Monica E. Sparks', documentId: 4, addressId: 4 },
  { name: 'Matthew J. Ginn', documentId: 5, addressId: 5 },
  { name: 'Dorothy J. Alexander', documentId: 6, addressId: 6 },
  // GBR
  { name: 'James Griffiths', documentId: 7, addressId: 7 },
  { name: 'Natasha Mason', documentId: 8, addressId: 8 },
  { name: 'Tom Bird', documentId: 9, addressId: 9 },
  { name: 'Elizabeth Simpson', documentId: 10, addressId: 10 },
  { name: 'Lewis Graham', documentId: 11, addressId: 11 },
  { name: 'Sofia Hopkins', documentId: 12, addressId: 12 },
  // BRA
  { name: 'Ana Pereira Rodrigues', documentId: 13, addressId: 13 },
  { name: 'Danilo Rodrigues Ribeiro', documentId: 14, addressId: 14 },
  { name: 'Luana Rodrigues Melo', documentId: 15, addressId: 15 },
  { name: 'Erick Martins Gomes', documentId: 16, addressId: 16 },
  { name: 'Bianca Correia Araujo', documentId: 17, addressId: 17 },
  { name: 'José Barbosa Sousa', documentId: 18, addressId: 18 },
];
