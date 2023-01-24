export class Api {

	constructor() {

	}

	static async get(url) {
		return this.#request(url);
	}


	static async post(url, body) {
		return this.#request(url, "POST", body);
	}

	static async #request(url, method="GET", data) {
		let request;
		let options = null;
		method = method.toUpperCase();
		return new Promise((resolve, reject) => {
			switch (method.toUpperCase()) {
				case "GET":
					break;
				case "POST":
					options = {
						method: method,
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(data)
					}
					break;
			}

			fetch(url, options)
				.then((response) => {
					if(!response.ok) {
						reject(response);
					} else {
						response.json().then((data) => resolve(data));
					}
				})
				.catch((error) => reject(error))
		});
	}
}