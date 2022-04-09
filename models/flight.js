import mongoose from "mongoose";

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



//flight schema
const flightSchema = new Schema({
  route: {type:String},
  flightNum:{type:Number},
  airline: { type: String, enum:['Kamair','Ariana','Bakhtar','Turkish']},
  airport: {type: String, enum:['KBL','HRT','BLK','DBX'], default: "KBL"},
  departs: {
    type: Date,
  },
})




// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);

export { Flight };
