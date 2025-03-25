import { fetchallfooditemsservice } from "../services/foodItemService";
import { fetchfoodplacebyidservice } from "../services/foodPlaceService";

export const getfoodplacescontroller = async (req, res) => {
  try {
    const menuId = req.params.menuId; // Assuming menuId is passed as a route parameter
    const foodplaces = await fetchallfooditemsservice(menuId);
    res.status(200);
    res.json(foodplaces);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

export const getfoodplacebyidcontroller = async (req, res) => {
  try {
    const id = req.params.id; // Assuming id is passed as a route parameter
    const foodplace = await fetchfoodplacebyidservice(id);
    res.status(200);
    res.json(foodplace);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};
