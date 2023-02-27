const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nicolassalasaraoz:QAEfn3uqvqRjFmzF@cluster0.mmbiecs.mongodb.net/?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("se conecto a la base de datos");
    }
  }
);
