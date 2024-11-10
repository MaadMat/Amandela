// lib/adminDbConnect.ts

import { MongoClient } from 'mongodb';

// MongoDB connection string
const uri = `mongodb+srv://${process.env.ADMIN_USER}:${process.env.ADMIN_PASS}@${process.env.ADMIN_DB_ACCESS_RIGHTS}`;

if (!uri) {
  throw new Error('Please define the MongoDB URI in your environment variables.');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to prevent multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  // In production, create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default function clientPromises(): Promise<MongoClient> {
  return clientPromise;
}
