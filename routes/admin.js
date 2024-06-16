const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}= require("../db")
const jwt = require("jsonwebtoken")

// Admin Routes
router.post('/signup', async(req, res) => {
// Implement admin signup logic
    const username=req.body.username;
    const password= req.body.password;

    await Admin.create({
        username,
        password
    })
    res.json({
        message:"admin create succesfully"
    })
});

router.post('/signin', (req, res) => {
    const username=req.body.username;
    const password= req.body.password;
    // Implement admin signup logic
     

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;