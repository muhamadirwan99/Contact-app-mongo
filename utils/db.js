const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu");

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Bernika Thania",
//   nohp: "082123456789",
//   email: "bernikathania@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
