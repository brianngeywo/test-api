import { fetchallfooditemsservice } from "../services/foodItemService";

export const fetchallfooditemscontroller = async (req, res) => {
  try {
    const menuId = req.params.menuId; // Assuming menuId is passed as a route parameter
    const fooditems = await fetchallfooditemsservice(menuId);
    res.status(200);
    res.json(fooditems);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};
