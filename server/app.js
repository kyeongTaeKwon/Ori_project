import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import cors from "cors";
import mongoose from "mongoose";
import password from "./db_password";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

const uri = `mongodb+srv://kwon_:${password}@clusterforreviews.a5pds.mongodb.net/ori_?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connencted to Database"))
  .catch(err => console.log("Error", err.message));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("listening for requsets on port 4000");
});
