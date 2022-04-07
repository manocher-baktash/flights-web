import mongoose from "mongoose";

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



//flight schema
const flightSchema = new Schema({
  route: {type:String, required:true},
  airline: { type: String, enum:['Kamair','Ariana','Bakhtar','Turkish']},
  airport: {type: String, enum:['KBL','HRT','BLK','DBX'], default: "KBL"},
  flightNo: {type: Number, required:true, min:10,max:9999},
  departs: {
    type: Date,
  },
})




// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);

export { Flight };
