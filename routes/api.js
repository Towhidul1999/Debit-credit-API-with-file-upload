const express = require('express');
const LoginController = require('../app/controllers/HTTP/LoginController.js');
const router = express.Router();
/* Controllers */
const UserController = lulu.use('app/controllers/HTTP/UserController');
const PaymentController = require('../app/controllers/HTTP/PaymentController');
/* Controllers */
/* Request Validator Middlewares */
const UserRegistrationRequest = lulu.use('app/requests/UserRegistrationRequest');
/* Request Validator Middlewares */

const multer = require('multer');
const path = require("path");

var UPLOADS_FOLDER = "./uploads";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb) =>{
        const fileExt = path.extname(file.originalname);
        const filename = file.originalname.replace(fileExt, "").toLocaleLowerCase().split(" ").join("-") + "-" + Date.now();

        cb(null, filename + fileExt)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
            cb(null, true)
        }else{
            cb(new Error("Only jpg, png and jpeg is supported"))
        }
    }
})

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [
    UserRegistrationRequest
],  UserController.register);

router.get('/user/list', [],  UserController.list);
router.get('/user/details/:id', [],  UserController.details);
router.post('/login', [], LoginController.login);
router.post('/payment', [upload.single('file')], PaymentController.payment);


module.exports = router;