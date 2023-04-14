const express = require("express");
const app = express();
const morgan = require("morgan");

// settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// morgan: es un middleware que permite ver por consola lo que va llegando al servidor
// middlewares - funciones que procesan datos antes de que nuestro servidor los reciba
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
