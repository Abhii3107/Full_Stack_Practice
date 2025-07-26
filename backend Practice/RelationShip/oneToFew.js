const mongoose = require("mongoose");

main()
  .then(() => console.log("Connection Sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation_Demo");
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      location: String, // Creating Sub document - Child document (In nested way)
      City: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "Abhay Singh",
    addresses: [
      {
        // _id: false,   - when we dont want individual id for sub document
        location: "Anantpur",
        City: "Mohania",
      },
    ],
  });

  //Inserting another addresses
  user1.addresses.push({ location: "Wadgaon Sheri", City: "Pune" });

  let result = await user1.save();
  console.log(result);
};

addUsers();

//here in console we notice that , for each addressess there is id
//but we only define userschema for user so it should be there id only (last one)
//but mongodb create =s individual id for each addresses , so mongo db assume that nested,sub document is valid document , so thats why by default its add id in these ,
// to off these - we simply write in schema ->   // _id: false

//----------------------
/*
Note:
In the output, you’ll see that each address in the 'addresses' array gets its own _id field,
even though we only defined a schema for the user.

This happens because Mongoose treats each item in the nested array as a valid sub-document,
and by default, Mongoose assigns an _id to every sub-document.

If you don’t want these _id fields for each address, you can set `_id: false` inside the sub-schema like this:

addresses: [
  {
    _id: false,
    location: String,
    City: String,
  },
]
*/
