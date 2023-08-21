const app = require("express")();
const bodyParser = require("body-parser");
const morgan = require("morgan"); // import morgan for request logging
const cors = require("cors"); // import cors for handling Cross-Origin Resource Sharing (CORS)
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;

const payment = require("./routes/payment");

// apply middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/payment", payment);

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
