const supertest = require('supertest');
const axios = require('axios');

describe("Testing the Space API", () => {

	it("tests the base route and returns true for status", async () => {

		const response = await axios.get(process.env.SPACE_X_FISRST_API);
		 
		expect(response.data.length).toBe(100);
		expect(response.statusText).toBe('OK'); 
		expect(response.status).toBe(200);

	});

});