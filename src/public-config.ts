export const PORT = process.env.POST ?? '8080';
export const HOST = process.env.HOST ?? '0.0.0.0';

export const API_SERVER_URL = `http://${HOST}:${PORT}/api`;
