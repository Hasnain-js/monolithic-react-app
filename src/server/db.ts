import { MongoClient } from "mongodb";
import { MONGODB_URL, DATABASE_NAME} from "./config";

const client = new MongoClient(MONGODB_URL);
let connectedClient: any;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME)
    }

    await client.connect();
    await client.db(DATABASE_NAME).command({ ping: 1 });
    console.info("Connected to MongoDB");
    connectedClient = client;
    return connectedClient.db(DATABASE_NAME)
}

export const disconnectClient = async () => {
 await connectedClient?.close();
}
