import { PrismaClient } from "@prisma/client";

let _primsaClient: PrismaClient;

const getPrismaClient = () => {
  if (!_primsaClient) {
    _primsaClient = new PrismaClient();
  }
  return _primsaClient;
};

export const prisma = getPrismaClient();
