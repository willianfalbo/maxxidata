import 'dotenv/config';
import { checkConfig } from './helper';

export const ENVIRONMENT = String(checkConfig(process.env.NODE_ENV));
export const PORT = process.env.PORT || 3000;
export const ALLOWED_ORIGIN = String(checkConfig(process.env.ALLOWED_ORIGIN));
