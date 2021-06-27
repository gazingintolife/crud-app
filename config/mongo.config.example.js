
module.exports = {
    db: `mongodb+srv://userIsAvinash:Avi-nash1@cluster0.eedjs.mongodb.net/myFirstDatabase?authSource=admin&retryWrites=true&w=majority`,
    db_dev: 'mongodb://127.0.0.1:27017/database',
  };

  console.log("from config",process.env.DB_USER,process.env.DB_PASS)