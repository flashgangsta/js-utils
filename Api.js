export class Api {

	constructor() {

	}

	static async get(url) {
		return this.#request(url);
	}


	static async post(url, body) {
		return this.#request(url, "GET", body);
	}

	static async #request(url, method="GET", data) {
		let  request;
		switch (method.toUpperCase()) {
			case "GET":
				request = await fetch(url);
				break
			case "POST":
				request = await fetch(url, {
					method: method,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				});
				break;
		}

		return request.json();
	}
}