// import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// dotenv.config({
//   path: "./env",
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running ar port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("MONGO DB connection failed !!!", err));
