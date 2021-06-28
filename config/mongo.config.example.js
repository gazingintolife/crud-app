module.exports = {
    db: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.eedjs.mongodb.net:27017,cluster0-shard-00-01.eedjs.mongodb.net:27017,cluster0-shard-00-02.eedjs.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yakf1q-shard-0&authSource=admin&retryWrites=true&w=majority`
}

console.log(process.env.DB_USER, process.env.DB_PASS);