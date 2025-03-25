#!/bin/bash

# Create the directory structure
mkdir -p src/{routes,controllers,services,prisma}

# Create route files
touch src/routes/foodPlaceRoutes.ts
touch src/routes/menuRoutes.ts
touch src/routes/foodItemRoutes.ts
touch src/routes/index.ts

# Create controller files
touch src/controllers/foodPlaceController.ts
touch src/controllers/menuController.ts
touch src/controllers/foodItemController.ts

# create repository files
touch src/repositories/foodPlaceRepository.ts
touch src/repositories/menuRepository.ts
touch src/repositories/foodItemRepository.ts   

# Create service files
touch src/services/foodPlaceService.ts
touch src/services/menuService.ts
touch src/services/foodItemService.ts

# Create Prisma client file
touch src/prisma/client.ts

# Create app and server files
touch src/app.ts
touch src/server.ts