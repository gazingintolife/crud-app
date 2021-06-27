
module.exports = {
    db: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crud.0rs4n.mongodb.net/Database?retryWrites=true&w=majority`,
    db_dev: 'mongodb://127.0.0.1:27017/database',
  };