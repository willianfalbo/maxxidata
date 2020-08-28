import { Logger } from '@nestjs/common';

const errorMessage =
  'Make sure you have all configuration setup in your .env file';

export function checkConfig(value: any): void {
  if (!value) {
    Logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  return value;
}
