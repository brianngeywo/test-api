import { getmenusservice } from "../services/menuService";

export const getfoodmenus = async (req, res) => {
  try {
    const foodPlaceId = req.params.foodPlaceId; // Assuming foodPlaceId is passed as a route parameter
    const foodmenus = await getmenusservice(foodPlaceId);
    res.status(200);
    res.json(foodmenus);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};
