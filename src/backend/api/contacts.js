const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);

    // knex syntax for selecting things. Look up the documentation for knex for further info
    const contact = await knex("contacts").select("*").where(request.params);
    response.json(contact[0]);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const contacts = await knex("contacts").select("name", "phonenumber");
    response.json(contacts);
  } catch (error) {
    throw error;
  }
});

// 1. setup the post route - done
// 2. get the data from the request - done
// 3. Insert any user into the database (test data) - done
// 4. insert the data from the request into the database - done
router.post("/", async (request, response) => {
  try {
    const contactData = request.body;
    // const contact = {
    //   name: "benjamin",
    //   phonenumber: "12345678",
    // };

    // await knex("contacts").insert(contact);

    const insertedUser = await knex("contacts").insert({
      name: request.body.name,
      phonenumber: request.body.phonenumber,
    });

    response.json(insertedUser);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
