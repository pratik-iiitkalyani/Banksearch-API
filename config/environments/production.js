
module.exports = {
    // host: "127.0.0.1",
    port: process.env.PORT, // change with production port
    logLevel: process.env.LOG_LEVEL,
    secret: process.env.SECRET,
    mongoUrl: process.env.MONGO_URL
};