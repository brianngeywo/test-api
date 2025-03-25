// src/server.ts

import serverapp from './app';
const PORT = process.env.PORT || 3000;

serverapp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default serverapp;