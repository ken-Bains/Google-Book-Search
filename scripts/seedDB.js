const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

const bookSeed = [
  {
    author: "Neil Gaiman",
    description : "When a young girl ventures through a hidden door, she finds another life with shocking similarities to her own.<br><br>Coraline has moved to a new house with her parents and she is fascinated by the fact that their 'house' is in fact only half a house! Divided into flats years before, there is a brick wall behind a door where once there was a corridor. One day it is a corridor again and the intrepid Coraline wanders down it. And so a nightmare-ish mystery begins that takes Coraline into the arms of counterfeit parents and a life that isn't quite right.<br><br>Can Coraline get out? Can she find her real parents? Will life ever be the same again?",
    image: "http://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE719dXztP3dAdBy8dX88RJDVavCpLOF-AbbvHw0aQyhvEkkUuDu4wLGQiatpxcH6-qCwH8FPmaFwE7dVBzUeUAZd-UYeOJ5f8p2T5_tCbEEFDJOHJS2ppe2ZyzN5TlAW_nJaD6JH&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=C8NVhWNU_uIC&source=gbs_api"
  }
];

db.Books.remove({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
