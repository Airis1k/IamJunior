import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";
import Service from "../model/Service.js";
import Business from "../model/Business.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/categories", async (req, res) => {
   let collection = await db.collection("categories");
   let results = await collection.find({}).toArray();
   res.status(200).json({ data: results });
});

router.get("/businesses", async (req, res) => {
   let collection = await db.collection("businesses");
   let results = await collection.find({}).toArray();
   res.status(200).json({ data: results });
});

router.get("/businesses/category/:category", async (req, res) => {
   const { category } = req.params;

   const capitalizedString =
      category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

   let collection = await db.collection("businesses");
   let results = await collection
      .find({ service: capitalizedString })
      .toArray();
   res.status(200).json({ data: results });
});

// This section will help you get a single record by id
router.get("/businesses/:id", async (req, res) => {
   const { id } = req.params;

   let collection = await db.collection("businesses");
   let query = { _id: new ObjectId(id) };
   let result = await collection.findOne(query);

   if (!result) res.status(404).json({ message: "Not found" });
   else res.status(200).json({ data: result });
});

// This section will help you create a new record.
router.post("/categories", async (req, res) => {
   const { name, icon } = req.body;

   if (!name) {
      return res.status(400).json({ message: "name field cannot be empty!" });
   }
   if (!icon) {
      return res.status(400).json({ message: "icon field cannot be empty!" });
   }

   try {
      const newDocument = new Service({
         name: name,
         icon: icon,
      });
      let collection = await db.collection("categories");
      let result = await collection.insertOne(newDocument);
      res.status(204).json({ message: result });
   } catch (err) {
      console.error(err);
      res.status(500).send("Error adding new category");
   }
});

router.post("/businesses", async (req, res) => {
   const { service, name, person, address, image } = req.body;

   if (!service) {
      return res
         .status(400)
         .json({ message: "service field cannot be empty!" });
   }
   if (!name) {
      return res.status(400).json({ message: "name field cannot be empty!" });
   }
   if (!person) {
      return res.status(400).json({ message: "person field cannot be empty!" });
   }
   if (!address) {
      return res
         .status(400)
         .json({ message: "address field cannot be empty!" });
   }
   if (!image) {
      return res.status(400).json({ message: "image field cannot be empty!" });
   }

   try {
      const newDocument = new Business({
         service: service,
         name: name,
         person: person,
         address: address,
         image: image,
      });
      let collection = await db.collection("businesses");
      let result = await collection.insertOne(newDocument);
      res.status(204).json({ message: result });
   } catch (err) {
      console.error(err);
      res.status(500).send("Error adding new business");
   }
});

// This section will help you update a record by id.
router.patch("/businesses/:id", async (req, res) => {
   const { id } = req.params;
   const { service, name, person, address } = req.body;

   try {
      const query = { _id: new ObjectId(id) };
      const updates = {
         $set: {
            service: service,
            name: name,
            person: person,
            address: address,
         },
      };

      let collection = await db.collection("businesses");
      let result = await collection.updateOne(query, updates);
      res.send(result).status(200);
   } catch (err) {
      console.error(err);
      res.status(500).send("Error updating record");
   }
});

// This section will help you delete a record
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// router.delete("/:id", async (req, res) => {
//    try {
//       const query = { _id: new ObjectId(req.params.id) };

//       const collection = db.collection("records");
//       let result = await collection.deleteOne(query);

//       res.send(result).status(200);
//    } catch (err) {
//       console.error(err);
//       res.status(500).send("Error deleting record");
//    }
// });

export default router;
