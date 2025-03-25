const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const fetchallfoodplacesservice = async () => {
  const foodPlaces = await prisma.foodPlace.findMany({
    include: {
      menu: {
        include: {
          items: true,
        },
      },
    },
  });
  return foodPlaces.json();
};


// fetch by id
export const fetchfoodplacebyidservice = async (id) => {
  const foodPlace = await prisma.foodPlace.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      menu: {
        include: {
          items: true,
        },
      },
    },
  });
  return foodPlace.json();
};