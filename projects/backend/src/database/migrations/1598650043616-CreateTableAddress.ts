import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CountryCodeEnum } from '../../shared/enums/country.enum';

const tableName = 'address';

export class CreateTableAddress1598650043616 implements MigrationInterface {
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
            name: 'street',
            type: 'varchar',
            isNullable: false,
            length: '50',
          },
          {
            name: 'number',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
            length: '30',
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
            length: '20',
          },
          {
            name: 'postal_code',
            type: 'varchar',
            isNullable: false,
            length: '20',
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: false,
            length: '3',
          },
        ],
      }),
      true,
    );

    // insert hardcoded addresses
    hardcodedAddress.forEach(async address => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(tableName)
        .values(address)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(tableName);
  }
}

const hardcodedAddress = [
  // USA
  { street: 'Mulberry St.', number: 413, city: 'Waterford', state: 'MI', postalCode: '48329', country: CountryCodeEnum.UNITED_STATES },
  { street: 'Tallwood Drive', number: 567, city: 'Michigan City', state: 'IN', postalCode: '46360', country: CountryCodeEnum.UNITED_STATES },
  { street: 'Meadowbrook Court', number: 12, city: 'Pasadena', state: 'MD', postalCode: '21122', country: CountryCodeEnum.UNITED_STATES },
  { street: 'Applegate Dr.', number: 1, city: 'North Wales', state: 'PA', postalCode: '19454', country: CountryCodeEnum.UNITED_STATES },
  { street: 'East Bridge Ave.', number: 7, city: 'Bear', state: 'DE', postalCode: '19701', country: CountryCodeEnum.UNITED_STATES },
  { street: 'York St.', number: 3, city: 'Lake Worth', state: 'FL', postalCode: '33460', country: CountryCodeEnum.UNITED_STATES },
  // GBR
  { street: 'Lorton Road', number: 71, city: 'Cumbria', state: 'England', postalCode: 'CA13 9DF', country: CountryCodeEnum.UNITED_KINGDOM },
  { street: 'Fox Lane', number: 33, city: 'Norfolk', state: 'England', postalCode: 'NR14 7QA', country: CountryCodeEnum.UNITED_KINGDOM },
  { street: 'Kuhn Inlet', number: 6815, city: 'Highland', state: 'Scotland', postalCode: 'IV19 1QR', country: CountryCodeEnum.UNITED_KINGDOM },
  { street: 'Watsica Trail', number: 856, city: 'Monmouthshire', state: 'Wales', postalCode: 'NP25 4TX', country: CountryCodeEnum.UNITED_KINGDOM },
  { street: 'Botsford Union', number: 2158, city: 'Perth', state: 'Scotland', postalCode: 'PH17 2QG', country: CountryCodeEnum.UNITED_KINGDOM },
  { street: 'Kassulke Hills', number: 19939, city: 'County Cork', state: 'Ireland', postalCode: 'P81 TD34', country: CountryCodeEnum.UNITED_KINGDOM },
  // BRA
  { street: 'Rua Lúcio Rangel', number: 1405, city: 'São Paulo', state: 'SP', postalCode: '04870-030', country: CountryCodeEnum.BRAZIL },
  { street: 'Rua Pastor Voges', number: 1770, city: 'São Leopoldo', state: 'Rio Grande do Sul', postalCode: '93030-160', country: CountryCodeEnum.BRAZIL },
  { street: 'Travessa Sexta', number: 1149, city: 'Belém', state: 'Pará', postalCode: '66815-540', country: CountryCodeEnum.BRAZIL },
  { street: 'Rua Guararema', number: 326, city: 'Campinas', state: 'São Paulo', postalCode: '13030-640', country: CountryCodeEnum.BRAZIL },
  { street: 'Rua Surubim', number: 1815, city: 'Boa Vista', state: 'Roraima', postalCode: '69312-425', country: CountryCodeEnum.BRAZIL },
  { street: 'Rua Ida Schneider', number: 1874, city: 'Joinville', state: 'Santa Catarina', postalCode: '89213-636', country: CountryCodeEnum.BRAZIL },
];
