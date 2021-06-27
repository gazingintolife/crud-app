
module.exports = {
    db: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@crud.0rs4n.mongodb.net/Database?retryWrites=true&w=majority`,
    db_dev: 'mongodb://127.0.0.1:27017/database',
  };