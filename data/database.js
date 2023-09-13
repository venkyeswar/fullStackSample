const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let mongodbUrl="mongodb+srv://venkyeswar2037:7112001Venky@cluster0.qpo13la.mongodb.net/?retryWrites=true&w=majority";


if(process.env.MONGODB_URL){
  mongodbUrl=process.env.MONGODB_URL;
}
let database;

async function initDatabase() {
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('deployment');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
