import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runSeed() {
  await prisma.user.create({
    data: {
      email: 'oBxH5@example.com',
      password: 'password',
      name: 'John',
    },
  });
}

runSeed();
