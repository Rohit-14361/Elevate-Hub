const mongoose = require("mongoose");

const config = require(".");

mongoose.set("strictQuery", true);

mongoose
  .connect(config.DB_URL)
  .then(() => console.log("db is connected to db"))
  .catch((err) => {
    console.log(err);
    console.log("Database connection is not established");
  });

// catching the collaborating info of the error
// if u want to detailed point /separate point
// mongoose.connect then catch -ek baar hi baar k liye hi excute hote hai
// lekin connection.on har thori time pr monitor krta rehta hai connection ko live hai disturberance to ni aa rhi hai (better debugging of ur code in case of any connectivity issue from  the db point of view  )for monitoring point view below code

mongoose.connection.on("connected", () => {
  console.log("mongoose default connection open to" + config.DB_URL);
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose default connection has an error" + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});
process.on("SIGINT", () => {
  process.exit(0);
});

// line 23 :- memory leakage --connection establish aap ni v use kr rhe ho we are also going to keep the memory of that part. (connection loosely -acking attack, memory time lega clean for swicth off the connection)

// signint - signal when a user manually stop the process--logout signout
module.exports = mongoose.connection;

// whenenver you have created a schema or if you have testing of ur backend if any field u not given it should not given any query
// if u have included a field in your query but that is not present in the schema then it is going to ignore the property and never goind to save in your database.
/*
name 
uid course

store-name uid course marks 
strict query
*/
