const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vasoyaprince14:9518139625@cluster0.c95attf.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>{
//     console.log("db connected");
// }).catch(e){
//     console.log("errr agy");
// };

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}