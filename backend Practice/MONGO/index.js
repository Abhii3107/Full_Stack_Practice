const mongoose = require('mongoose'); // moongoose- A library that creates a connection between MongoDb and Node.js Javascript

//mongoose.connect('mongodb://127.0.0.1:27017/test'); -> connect method connect mongoose to that url (which is database link (ex- test database)) ,  mongodb -  protocol, 127.0.0.1- similar localhost .2707 -port no, /test -database link

main()
.then((res) => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({    // define Schema -shape of document within collection
    name: String,
    email : String,
    age: Number
}); 

//Model_name          //collection name
const User = mongoose.model("User", userSchema); // model in mongoose is a class with which we construct documents

// const user1= new User({
//     name:"Abhay",
//     email :"abhay123@gmail.com",  // inserting one data 
//     age :23
// });

// user1.save() // .save method return promise

// const user2= new User({
//     name:"Akash",
//     email :"akash123@gmail.com",  // inserting one data 
//     age :24
// });

// user2.save()
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err);
// })

// //inserting many - whenever we use insert,update method it automatically save in Db

// User.insertMany([
//     {name : "Tony" , email: "ironman@gmail.com" , age :50},
//     {name : "peter" , email: "spiderman@gmail.com" , age :22},  //this function also return promise
//     {name : "steve" , email: "captain@gmail.com" , age :50}
// ])
// .then((data) =>{
// console.log(data)
// });

//--------------------------------------------------

//FIND -Model.find() -> returns a query object (Not a promise), but it is thennable

// User.find().
// then((data) => {
//   console.log(data);
// });

// User.find({age : {$gte:47}})
// .then((data) =>{
//   console.log(data);
// })
// .catch( (err) => {
//   console.log(err);
// });

//Model.findOne() -> returns a single result

// User.findOne({age : {$lte :45}})
// .then((data) =>{
//   console.log(data);
// });

// Mostly ID is used to get document in real world , so for that there is a method , we can find by findOne but in IDmethod it reduce filter part(_id)

//Model.findById()

// User.findById("67fb6a59aafd415db19691bd")
// .then((res) =>{
//   console.log(res)
// });

/*---------------------------------------------------------------------------------------------------------------------------------------------------- */

//UPDATE - it also return query object(Thenable) ,

//Model.updateOne({<filter>} ,{<update>},{<options>}) 
// User.updateOne({name: "Tony"} ,{ age: 40})      // here we eliminate set operator
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err);});

//Model.updateMany()

// User.updateMany({age : {$gte: 48}} ,{ age: 40})
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err);});

// {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }
 //In termnial result comes like this , to eliminate that and get data directly 

// Model.findOneAndUpdate(Filter,updation,options); -> (options.new=false) , if we true this value , a modified document return (nhi to modified to ho jayega pr cmd mai phela wala data show krega)

// User.findOneAndUpdate({name:"Tony"} ,{name :"Stark"} ,{new :true})
// .then((data) =>{
//   console.log(data);
// });

// //Model.findByIdAndUpdate();
// User.findByIdAndUpdate(("67fb6966590b4d34558c5daa") ,{name :"Bruce" , email :"Hulk@gmail.com"} ,{new :true})
// .then((data) =>{
//   console.log(data);
// });

//-------------------------------------------------------------------------------------------------------------------------

/*DELETE - condition and options are passed */

//Model.deleteOne() ->returns count
// User.deleteOne({name: "Abhay"})
// .then((res)=>{
//   console.log(res);
// });

//Model.deleteMany()
// User.deleteMany({age:{$lte :28}})
// .then((res) =>{
//   console.log(res)
// });

// same problem again , count returns so,

//Model.findByIdAndDelete();
//Model.findoneAndDelete();

// User.findByIdAndDelete('67fb6a59aafd415db19691bc')
// .then((data)=>{
//   console.log(data);
// }).catch((err) =>{console.log(err)});

// User.findOneAndDelete({age:{$lte:28}})
// .then((res) =>{
//   console.log(res);
// });

/*--------------------------------------------------------------------------------------------------------- */
