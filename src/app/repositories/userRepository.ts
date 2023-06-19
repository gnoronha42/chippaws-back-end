import User, { UserDocument } from "../models/User";

async function createUser(
  userData: Partial<UserDocument>
): Promise<UserDocument> {
  return User.create(userData);
}

async function getUsers(): Promise<UserDocument[]> {
  return User.find();
}

export { createUser, getUsers };
