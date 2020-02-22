const MongoClient = require("mongodb").MongoClient;

const MONGO_URL = "mongodb://localhost:27017";
var client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
const DB_NAME = "test";

/**
 * Connect the client to database at the specified URL
 * @returns {Promise} A promise is returned which resolves to the connected client. 
 *                    On failure, error is returned
 */
function connectToDatabse() {
    client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

    return new Promise(function(resolve, reject) {
        client.connect().then((connection) => {
            resolve(connection);
        }).catch((reason) => {
            client.close();
            reject(reason);
        });
    });
}

/**
 * return a Promise which resolves to a reference to the collection with name provided.
 * On failure, error is returned
 * @param {String} collectionName
 * @returns {Promise}
 */
function getCollection(collectionName) {
    return new Promise(function(resolve, reject) {
        if(client.isConnected()) {
            resolve(client.db(DB_NAME).collection(collectionName));
        }
        else {
            connectToDatabse().then((connection) => {
                resolve(connection.db(DB_NAME).collection(collectionName));
            }).catch((reason) => {
                reject(reason);
            })
        }
    });
}

function closeConnection() { client.close(); }

function insertProfile(profile) {
    
    return new Promise(function(resolve, reject) {
        getCollection("test").then((collection) => {
            collection.insertOne(profile).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
    
        }).catch((reason) => {
            reject(err);
        });
    });
}

module.exports.insertProfile = insertProfile;
module.exports.closeConnection = closeConnection;
