const MongoClient = require("mongodb").MongoClient;

const MONGO_URL = "mongodb://localhost:27017";
var client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

const COLLECTION_USERS = "Users";
const COLLECTION_PROFILE_CARDS = "ProfileCards";
const DB = "test";

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

function closeConnection() { client.close(); }

/**
 * return a Promise which resolves to a reference to the collection with name provided.
 * On failure, error is returned
 * @param {String} collectionName
 * @returns {Promise} Promise which resolves to a reference to the collection
 */
function getCollection(collectionName) {
    return new Promise(function(resolve, reject) {
        if(client.isConnected()) {
            resolve(client.db(DB).collection(collectionName));
        }
        else {
            connectToDatabse().then((connection) => {
                resolve(connection.db(DB).collection(collectionName));
            }).catch((reason) => {
                reject(reason);
            })
        }
    });
}

function insertUser(profile) {
    
    return new Promise(function(resolve, reject) {
        getCollection(COLLECTION_USERS).then((collection) => {
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

function insertProfileCard(profileCard) {
    
    return new Promise(function(resolve, reject) {
        getCollection(COLLECTION_PROFILE_CARDS).then((collection) => {
            collection.insertOne(profileCard).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        }).catch((reason) => {
            reject(reason);
        });
    });
}

/**
 * Update Profile Card in the data base with new crscodes
 * @param {JSON} updatedCard 
 * @param {JSON} queryObject
 * @returns {Promise<JSON>} Promise which resolves to update result (or error reason if rejected)
 */
function updateProfileCard(updatedCard, queryObject) {
    
    return new Promise(function(resolve, reject) {
        getCollection(COLLECTION_PROFILE_CARDS).then((collection) => {
            updateDoc = { $set: { crscodes: updatedCard.crscodes } }
            collection.updateOne(queryObject, updateDoc, function(err, updateResult) {
                if(err) reject(err);

                resolve(updateResult);
            });

        }).catch((reason) => {
            reject(reason);
        });
    });
}

function fetchUsers(params) {

    return new Promise(function(resolve, reject) {
        getCollection(COLLECTION_USERS).then((collection) => {
            collection.find(params).toArray(function(err, result) {
                if(err) { reject(err); }

                resolve(result);
            });
        }).catch((reason) => {
            reject(reason);
        });
    });
}

function fetchProfileCards(params) {
    return new Promise(function(resolve, reject) {
        getCollection(COLLECTION_PROFILE_CARDS).then((collection) => {
            collection.find(params).toArray(function(err, result) {
                if(err) { reject(err); }

                resolve(result);
            });
        }).catch((reason) => {
            reject(reason);
        });
    });
}

module.exports.insertUser = insertUser;
module.exports.insertProfileCard = insertProfileCard;
module.exports.updateProfileCard = updateProfileCard;
module.exports.closeConnection = closeConnection;
module.exports.fetchUsers = fetchUsers;
module.exports.fetchProfileCards = fetchProfileCards;
