const app = require("./src/app.js");
const PORT= process.env.PORT || 6070;

app.listen(process.env.PORT || PORT, () => {
console.log(`Viver sem limites pelo mundo ${PORT}`)

})