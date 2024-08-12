const mongoose = require("mongoose");

const initdata = require("./data.js");

const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    // await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
      ...obj,
      owner: "66b1b5c32b9c1a3924c1d385",
      geometry: { type: "Point", coordinates: [75.815025, 26.9217] },
    }));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
}

initDB();