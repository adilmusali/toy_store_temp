const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const toySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Toy = mongoose.model("toys", toySchema);

app.get("/toys", async (req, res) => {
  const toy = await Toy.find({});
  res.send(toy);
});

app.post("/toys", async (req, res) => {
  const uploadData = req.body;
  const toy = new Toy(uploadData);
  toy.save();
  res.send(toy);
});

app.delete("/toys/:id", async (req, res) => {
  const findId = req.params.id;
  await Toy.findByIdAndDelete(findId);
  res.send({ message: "Successfully Deleted!" });
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
