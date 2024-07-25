import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Adson",
        lastName: "Mettler",
        age: 37
    },
    {
        firstName: "Beatriz",
        lastName: "Martinez",
        age: 36
    }
]

// all routes in here are starting with /users
router.get('/users', (req, res) => {
    console.log(users);

    res.send('Hello');
});

router.post('/', (req, res) => {
    
});

export default router;