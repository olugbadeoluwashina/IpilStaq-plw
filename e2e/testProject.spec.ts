// import { test, expect } from '@playwright/test';
// import { fa, faker } from '@faker-js/faker';


// test('verify user can get all test cases successfully', async ({ request }) => {
//   const response = await request.get('/testCases');
//   const jsonResponse = await response.json();
//   expect(response.ok()).toBeTruthy();
//   expect(jsonResponse.data.length).toBeGreaterThan(0);
//   expect(jsonResponse.data[0].id).toBeTruthy()
// });

// test('verify test case by invalid id is NOT returns NOT FOUND', async ({ request }) => {
//   const uuid = faker.string.uuid()
//   const response = await request.get(`/testCases/${uuid}`);
//   const jsonResponse = await response.json();
//   console.log(jsonResponse)
//   expect(response.ok()).toBeFalsy();
//   expect(response.status()).toEqual(404);
// })