/*-----------One To Many--------------- */

//store a Reference(pointer) to the child document inside parent.
// ex- id

// ex- a cutomer(parent) have many orders (child)  (in large number)

const mongoose = require("mongoose");

main()
  .then(() => console.log("Connection Sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_Demo");
}

const OrderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", OrderSchema);

// let addOrder = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Choclate", price: 50 },
//   ]);
//   console.log(res);
// };

// addOrder();

const CustomerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", // reference konse model se aayegi -> // Refers to the "Order" model
    },
  ],
});

const Customer = mongoose.model("Customer", CustomerSchema);

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Choclate" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  await cust1.save();

  let result = await Customer.find({});
  console.log(result);
};

addCustomer(); // customer mai kwel orderid dikhegi items ki

/*
🟢 Explanation:
- We use ObjectId to create a reference from Customer → Order.
- Only Order IDs are saved inside Customer (not full data).
- To see full order data, we use `.populate("orders")`.
*/
