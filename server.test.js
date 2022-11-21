const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the get method", () => {
        const response = request(app).post("http://localhost:8000/User/add").send({
            "Name": "Tayyab",
            "Email": "tayyabqaisar41514@gmail.com",
            "Age": 12,
            "Contact": 123,
        })
            expect(response.statusCode).toBe(200);
    })
})


describe("Check for user added", () => {
    test("user added", () => {
        const response = request(app).post("http://localhost:8000/User/add").send({
            "Name": "Qaisar",
        })
            expect(response.statusCode).toBe(200);
    })
})

describe("Check for user deleted", () => {
    test("user deleted", () => {
        const response = request(app).post("http://localhost:8000/User/delete").send({
            "Name": "Tayyab",
            "Email": "tayyabqaisar41514@gmail.com",
            "Age": 12,
            "Contact": 123,
        })
            expect(response.statusCode).toBe(200);
    })
})
