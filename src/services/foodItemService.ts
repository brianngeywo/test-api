import prisma from "../prisma/client";

export const fetchallfooditemsservice = async (menuId) => {
  const fooditems = await prisma.foodItem.findMany({
    where: {
      menuId: menuId,
    },
    include: {
      menu: true,
    },
  });
  return fooditems;
};
