const app = require("./src/app");
const port = 9090;

app.listen(process.env.PORT || port, () => {
  console.log(`app está rodando na porta ${port}`);
});