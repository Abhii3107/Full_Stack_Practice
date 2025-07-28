//Handling Deletion -> using Mongoose Middleware

//Ek model ke andr kuch delete hua to phir dekha jata hai ki , kya uss model ka kisi dusre model ke sath relation, aur jha pe related tha ,uss data ko bhi delete  krna pdega

// for ex - let there is two table - Customer (parent), order (child) (one to many approach)
//agr kisi customer ko delete kre to uska order bhi dure table se delete ho jaye

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_Demo");
}

const OrderSchema = new Schema({
  item: String,
  price: Number,
});

const CustomerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order", // reference konse model se aayegi -> // Refers to the "Order" model
    },
  ],
});
//------------
// CustomerSchema.pre("findOneAndDelete", async () => {
//   console.log("pre middleware executed before delete");
// });

// CustomerSchema.post("findOneAndDelete", async () => {
//   console.log("post middleware executed before delete");
// });

CustomerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } }); // id filter
    console.log(res);
  }
});
//-------------
const Order = mongoose.model("Order", OrderSchema);
const Customer = mongoose.model("Customer", CustomerSchema);

let addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "pineapple cake",
    price: 350,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();
};

// addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6887807fc3a9f63440fd6fe5"); // karan arjun id
  console.log("deleted");
  console.log(data); // now from customer 0 karan arjun deleted and its order pineapple deleted from order model(table)
};

delCust(); // when we delete customer it will deleted and but its related order - ex- pizza still in order table
//we want that , if customer is related its order also deleted from order table

/*
Moongoose documentation

(1) findByIdandDelete -> FindoneAndDelete -> (3) moongoose middleware  (of findoneAndDelete)   (ex- pre,post); 

when 1 trigger ,automatically 2 trigger than 3 triggers 
 */
