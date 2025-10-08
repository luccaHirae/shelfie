import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM)
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);