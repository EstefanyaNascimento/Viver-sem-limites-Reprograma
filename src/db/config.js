const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://Estefanya:854702@cluster0.ib4n8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Em conexão com o mongoDB")


    } catch (error) {

        console.log(error.message)
    }
}

module.exports = {
    connect
    
}
