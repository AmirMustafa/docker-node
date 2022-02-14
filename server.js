const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let userGoal = "Explore Docker!";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/product", (req, res) => {
  res.send([
    {
      id: 1,
      product: "Whey Gold",
      price: "$100",
    },
    {
      id: 1,
      product: "Solar Plate",
      price: "$20",
    },
    {
      id: 1,
      product: "Fruit Basket",
      price: "$5",
    },
  ]);
});
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Dockerizing our App - Happy Learnings Again!!</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Add more</label>
            <input type="text" name="goal">
          </div>
          <button>Save</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/store-goal", (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect("/");
});

app.listen(80);
