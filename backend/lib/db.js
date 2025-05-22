const mongoose = require("mongoose")

const dt = async () => {
    try{
        const conn = await mongoose.connect(process.env.uri)
        console.log("Mongoose Connection At : " + conn.connection.host)
    } catch (err) {
        console.log( "Mongoose Error : " + err.message)
        process.exit(1)
    }
}

module.exports = dt