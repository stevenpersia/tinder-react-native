const ENDPOINT = "http://10.0.2.2"; // goes to localhost from avd
const PORT = 3000;

class Fetcher {

    // need to add credentials to log-in to the backend server
    constructor(customEndpoint, customPort) {
        this.ENDPOINT = customEndpoint ? customEndpoint : ENDPOINT;
        this.PORT = customPort ? customPort : PORT;
    }

    async fetchCards() {        
        let cards = await (await fetch(this.ENDPOINT + ":" + String(this.PORT) + "/fetchProfileCards?email=harsh@gmail.com")).json();
        return cards;
    }

    async fetchUsersById(ids) {
        let users = await (await fetch(this.ENDPOINT + ":" + String(this.PORT) + "/fetchUsers_id", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ids)
        })).json()

        return users;
    }
}

export default Fetcher;
