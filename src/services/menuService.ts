import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getmenusservice = async (foodPlaceId) => {
  const menus = await prisma.menu.findMany({
    where: {
      foodPlaceId: foodPlaceId,
    },
    include: {
      items: true,
    },
  });
  return menus;
};


// fetch by id
export const getmenusbyidservice = async (id) => {
  const menu = await prisma.menu.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      items: true,
    },
  });
  return menu;
};