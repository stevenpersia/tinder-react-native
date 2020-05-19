const ENDPOINT = "http://10.0.2.2"; // goes to localhost from avd
const PORT = 3000;

class Fetcher {

    // need to add credentials to log-in to the backend server
    constructor(customEndpoint, customPort) {
        this.ENDPOINT = customEndpoint ? customEndpoint : ENDPOINT;
        this.PORT = customPort ? customPort : PORT;
    }

    async fetchCards(email) {        
        return await (await fetch(this.ENDPOINT + ":" + String(this.PORT) 
        + "/fetchProfileCards?email=" + email)).json();
    }

    async fetchUsersById(ids) {
        let users = await (await fetch(this.ENDPOINT + ":" + String(this.PORT) + "/fetchUsers_id", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids })
        })).json()

        return users;
    }

    async fetchUser(email) {
        return await (await fetch(this.ENDPOINT + ":" + String(this.PORT) 
        + "/fetchUsers?email=" + email)).json();
    }

    async loadData(email) {

        let profileCards = await this.fetchCards(email);

        ids = [];
        profileCards.forEach((_card) => {
            ids.push(_card["user_id"]);
        });

        let users = await this.fetchUsersById(ids);
        users = this.mapUsersToHashTable(users);

        profileCards.forEach((_card) => {
            _card.name = users[_card.user_id].name;
            _card.image = users[_card.user_id].image;
        });

        return profileCards;
    }

    async loadSelfProfile(email) {
        let user = (await this.fetchUser(email));
        return user[0];
    }

    mapUsersToHashTable(users) {
        var dict = {};
    
        users.forEach((user) => {
          dict[user._id] = user;
        });
    
        return dict;
    }
}

export default Fetcher;
