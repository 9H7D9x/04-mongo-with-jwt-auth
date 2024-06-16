const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://hdahiyadev:Ravan%409745@cluster0.m23fyz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{
        type: moongose.Schema.Type.ObjectId,
        ref:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    imageLink:String,
    description:String,
    price:Number
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}