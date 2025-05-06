const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection Succesful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats =[       // store them in array
    {
        from: "kitu",
        to :"jitu",
        message :"aur behan !",
        created_at: new Date() // by this random date and time generated
    },
    {
        from: "Akash",
        to :"Abhay",
        message :"aur bhai",
        created_at: new Date() // by this random date and time generated
    },
    {
        from: "Tony",
        to :"peter",
        message :"put your new suit",
        created_at: new Date() // by this random date and time generated
    },
    {
        from: "tony",
        to :"steve",
        message :"you betrayed me",
        created_at: new Date() // by this random date and time generated
    }
];

Chat.insertMany(allchats);