/*-----------One To Many--------------- */

//store a Reference(pointer) to the child document inside parent.
// ex- id

// ex- a cutomer(parent) have many orders (child)  (in large number)

// const mongoose = require("mongoose");

// main()
//   .then(() => console.log("Connection Sucessful"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/relation_Demo");
// }

// const OrderSchema = new mongoose.Schema({
//   item: String,
//   price: Number,
// });

// const Order = mongoose.model("Order", OrderSchema);

// let addOrder = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Choclate", price: 50 },
//   ]);
//   console.log(res);
// };

// addOrder();

// const CustomerSchema = new mongoose.Schema({
//   name: String,
//   orders: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Order", // reference konse model se aayegi -> // Refers to the "Order" model
//     },
//   ],
// });

// const Customer = mongoose.model("Customer", CustomerSchema);

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Rahul",
//   });

//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Choclate" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   await cust1.save();

//   let result = await Customer.find({});
//   console.log(result);
// };

// addCustomer(); // customer mai kwel orderid dikhegi items ki

/*
🟢 Explanation:
- We use ObjectId to create a reference from Customer → Order.
- Only Order IDs are saved inside Customer (not full data).
- To see full order data, we use `.populate("orders")`.
*/

//---------------------------------------------------------
// .populate()  -> is used to automatically replace the ObjectId(s) in a document with the actual referenced document(s) from another collection.

//✅ With .populate("orders")
// It replaces those ObjectIds with full Order documents:

// { id_834830328
//   name: "Rahul",
//   orders: [
//     { _id: "...", item: "Chips", price: 10 },
//     { _id: "...", item: "Chocolate", price: 50 }
//   ]
// }

//with .populate

// const find = async () => {
//   let res = await Customer.find({ name: "Rahul" }).populate("orders"); // this return object
//   console.log(res);
//   console.log(res[0]);
// };

// find();

//res
// [  {
//     _id: new ObjectId('68820086e915b4b62bc0a247'),
//     name: 'Rahul',
//     orders: [ [Object], [Object] ],
//     __v: 0
//   }]

//res[0]
// {
//   _id: new ObjectId('68820086e915b4b62bc0a247'),
//   name: 'Rahul',
//   orders: [
//     {
//       _id: new ObjectId('6881fc713d5c3047d0e36f6d'),
//       item: 'Chips',
//       price: 10,
//       __v: 0
//     },
//     {
//       _id: new ObjectId('6881fc713d5c3047d0e36f6e'),
//       item: 'Choclate',
//       price: 50,
//       __v: 0
//     }
//   ],
//   __v: 0
// }

//---------------------------------------------------------

//one to many /Approach3 (one to squllions)

//store a reference to the parent document inside Child.

//instagram useers , 1 ke 500 post,1000 post ,10000000 post
const mongoose = require("mongoose");

// // Connect to MongoDB
// main()
//   .then(() => console.log("Connection Successful"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/relation_Demo");
// }

// // User Schema (Parent)
// const instaUserSchema = new mongoose.Schema({
//   username: String,
//   email: String,
// });

// // Post Schema (Child) — stores reference to User
// const postSchema = new mongoose.Schema({
//   content: String,
//   likes: Number,
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// // Models
// const User = mongoose.model("User", instaUserSchema);
// const Post = mongoose.model("Post", postSchema);

// // Insert data
// const addData = async () => {
//   // Step 1: Create user
//   const user1 = new User({
//     username: "Ankita",
//     email: "ankita123@gmail.com",
//   });
//   await user1.save();

//   // Step 2: Create multiple posts using same user ID
//   const post1 = new Post({
//     content: "Hello world!",
//     likes: 7,
//     user: user1._id,
//   });

//   const post2 = new Post({
//     content: "Second post by Ankita",
//     likes: 15,
//     user: user1._id,
//   });

//   await post1.save();
//   await post2.save();

// //    // Find all posts without populate — only shows user IDs
// //   const result = await Post.find({});
// //   console.log(result);

//   // Step 3: Fetch all posts and populate user details
//   const result = await Post.find({}).populate("user");

// //   const result = await Post.find({}).populate("user", "usename"); // in output onlu suername show not email - parent post

//   console.log("Populated Result:\n", result);
// };

// addData();
