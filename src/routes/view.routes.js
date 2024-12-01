import { Router } from "express";
const router = Router();

let food = [
    {
        id: 1,
        name: "Pizza",
        price: 12.99
    },
    {
        id: 2,
        name: "Hamburger",
        price: 8.99
    },
    {
        id: 3,
        name: "Hot Dog",
        price: 4.99
    }
];

router.get('/food', (req, res) => {
    let userData = {
        name: "John",
        age: 30,
        city: "New York",
        role: "admin"
    };
    res.render('food', { 
        user: userData,
        isAdmin: userData.role === "admin",
        food
    });
});

let users = [{
    id: 1,
    name: "John",
    last_name: "Doe",
    age: 30,
    email: "correof1@gmail.com",
    phone: "1234567890"
}, {
    id: 2,
    name: "Jane",
    last_name: "Doe",
    age: 25,
    email: "correof2@gmail.com",
    phone: "78947525"
}, {
    id: 3,
    name: "Leo",
    last_name: "Messi",
    age: 33,
    email: "correof3@gmail.com",
    phone: "6789562"
}
];

router.get('/user', (req, res) => {
    const userRandom = users[Math.floor(Math.random() * users.length)];
    res.render('user', { user: userRandom });
});

export default router;