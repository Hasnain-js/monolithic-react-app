const env = process.env
export const PORT = process.env.POST ?? '8080';
export const HOST = process.env.HOST ?? '0.0.0.0';
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URL = process.env.MONGODB_URL ?? 'mongodb://localhost:27017'
export const DATABASE_NAME = process.env.DATABASE_NAME ?? 'local';
export default {
   PORT,
   HOST,
   SERVER_URL
}
