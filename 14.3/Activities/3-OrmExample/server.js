var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder(["animal_name", "price"], "pets", "price", 'ASC');

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", ["id", "price"], [1, 195]);

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
