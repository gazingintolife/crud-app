
module.exports = {
    db: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eedjs.mongodb.net/myFirstDatabase?authSource=myFirstDatabase&retryWrites=true&w=majority`,
    db_dev: 'mongodb://127.0.0.1:27017/database',
  };