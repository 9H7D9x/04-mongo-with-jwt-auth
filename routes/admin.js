const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, User}= require("../db")
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");


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

router.post('/signin', async(req, res) => {
    const username=req.body.username;
    const password= req.body.password;
    // Implement admin signup logic

    const user = await User.find({
        username,
        password

    })

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);
         
          res.json({
             token
          })
    }else{
        res.status(411).json(
            { message:"Incorrect email and password"}

        )
    }

    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
   
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;