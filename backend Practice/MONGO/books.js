const mongoose = require('mongoose');

main()
.then((res) => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

/*Schema Validation - Rules for schema */

// const BookSchema = new mongoose.Schema({    // define Schema
//     title: {
//         type:String,
//         requried : true
//     },
//     author: {
//         type :String
//     },
//     Price: {
//         type: Number
//     }
// }); 

// const Book = mongoose.model("Book",BookSchema);

// let book1= new Book({
//     title :"Mathematics" ,
//     author : "RD SHARMA",
//     Price : 180
// })

// book1.save();

// let book2= new Book({
//     title :"Mathematics x" ,
//     author : "RD SHARMA",
//     Price : "450"        // here it is string , it should be error - but not because mongodb can parse this a covert into number and then save , but "abc"- then error , it will not parsing
// })

// book2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// }); 

// -------------------------------------

const BookSchema = new mongoose.Schema({   
    title: {
        type:String,
        required : true
    },
    author: {
        type :String
    },
    Price: {
        type: Number,
        min: [50 ,"Price is too low for Amazon selling"] // if error , then this is custom message
    },
    discount: {
        type: Number,
        default: 0
    },

    genre :[String],
     
    Category:{
        type: String,
        enum: ["fiction" ,"Non-fiction"]
    }

}); 

const Book = mongoose.model("Book",BookSchema);

let book1= new Book({
    title: "Marvel comics",
    Price :500,
    Category :"Non-fiction",
    genre:["comics" ,"marvel" ,"Superheroes"]
});

// book1.save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// Updation dont follow rule(validation ) until we put in options{ runvalidators : true}

Book.findByIdAndUpdate("67fd7027b0df98a30cb588fe" ,{Price : -10} ,{runValidators : true})
.then((res) =>{
    console.log(res);
})
.catch((err) => {
    // console.log(err);
    console.log(err.errors.Price.properties.message);
})

// IT is now give error , to extract exact message (which is we written in rule)

//console.log(err.errors.category.properties.message); here category is Price