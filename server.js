const app = require("./src/app");
const port = process.env.PORT

app.listen(process.env.PORT || port, () => {
  console.log(`Viver sem limites pelo mundo ${port}`);
});