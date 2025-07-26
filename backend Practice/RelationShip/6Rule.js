// // Here are these 6 MongoDB data modeling guidelines rewritten in a very simple and beginner-friendly way, with examples to help you understand:

// // 1. Prefer embedding data (putting one object inside another) unless you have a good reason not to.
// // Simple words:
// // If two things always come together, keep them together in one document.

// // Example:
// // A user and their address can be embedded:

// // json
// // Copy
// // Edit
// // {
// //   "name": "Abhay",
// //   "address": {
// //     "city": "Ghaziabad",
// //     "pin": "201003"
// //   }
// // }
// // 2. If you need to use an object separately, don’t embed it.
// // Simple words:
// // If you need to search or update the data by itself often, keep it in a separate collection.

// // Example:
// // If you want to manage products and sellers separately:

// // Product collection:

// // { "name": "Shoes", "seller_id": "abc123" }
// // Seller collection:

// // { "_id": "abc123", "name": "Nike" }
// // 3. Avoid embedding huge arrays inside documents.
// // Simple words:
// // If one document needs to store too many items (hundreds or thousands), don't embed them. It slows down performance.

// // Example:
// // ❌ Bad:

// // json
// // Copy
// // Edit
// // { "user": "Abhay", "orders": [/* 1000+ orders */] }
// // ✅ Good: Store orders separately with user_id reference.

// // 4. Don’t be afraid to join data manually in your app.
// // Simple words:
// // MongoDB doesn’t support joins like SQL, but you can still fetch related data by making two queries — it's fast if you use indexes.

// // Example:
// // Get user_id, then get posts with that user_id. It’s okay and efficient if indexed properly.

// // 5. Only copy data (denormalize) if it doesn’t change often.
// // Simple words:
// // If a field is read often but rarely changes, it's okay to copy it in many places. But if it changes a lot, don’t copy it — too much update work!

// // Example:
// // ✅ Good: Storing product name inside order (product name rarely changes)
// // ❌ Bad: Storing user phone number inside all messages (phone may change)

// // 6. Your data structure should match how your app uses the data.
// // Simple words:
// // There’s no one perfect way. Always design your schema based on how your app reads/writes data.

// // Example:
// // If your app always shows blog posts with comments together → embed comments.
// // If your app often edits comments separately → keep them separate.

// //-----------------------------

// 📌 Two-Way Referencing in MongoDB (Simple Explanation)
// ✅ What is it?
// Two-way referencing means that both documents store a reference to each other — like mutual friendship.

// 🧠 Why use it?
// When both sides need to access each other easily.

// Helps in situations where both entities are important individually.

// 📄 user.js
// js
// Copy
// Edit
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   profile_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Profile"
//   }
// });

// module.exports = mongoose.model("User", userSchema);
// 📄 profile.js

// const mongoose = require("mongoose");

// const profileSchema = new mongoose.Schema({
//   bio: String,
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// });

// module.exports = mongoose.model("Profile", profileSchema);
// ✅ Creating Documents with Two-Way Reference

// const mongoose = require("mongoose");
// const User = require("./user");
// const Profile = require("./profile");

// mongoose.connect("mongodb://localhost:27017/twowayref");

// async function createTwoWayReference() {
//   const user = new User({ name: "Abhay" });
//   await user.save();

//   const profile = new Profile({ bio: "Web Developer", user_id: user._id });
//   await profile.save();

//   // Update user with profile reference
//   user.profile_id = profile._id;
//   await user.save();

//   console.log("Two-way reference created!");
// }

// createTwoWayReference();
