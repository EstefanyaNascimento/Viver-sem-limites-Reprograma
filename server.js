const app = require("./src/app");
const port = process.env.PORT || 9090;

app.listen(process.env.PORT || port, () => {
console.log(`Viver sem limites pelo mundo ${port}`)

})