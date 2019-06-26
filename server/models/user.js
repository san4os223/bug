const mongoose = require('mongoose');//підключення mongoose
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    kill : {
        type : Number,
        validate(value){
            if (value < 0){
                throw new Error("Age must be a positive number");
            }
        }
    },
    bug : {
        type : Number,
        validate(value){
            if (value < 0){
                throw new Error("Age must be a positive number");
            }
        }
    },
    item : {
        type : Number,
        validate(value){
            if (value < 0){
                throw new Error("Age must be a positive number");
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
});//опис об'єкту User


let sendUser = function(res){
    User.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((error) => {
        res.status(500).send();
    });
};//виведення користувачів

let addUser = function(name, kill, bug, item, email, password, res){
    user.name = name;
    user.kill = kill;
    user.bug = bug;
    user.item = item;
    user.email = email;
    user.password = password;
    user.save().then(() => {
        res.send(user);
    }).catch((error) => {
        console.log(error);
    });
};//додавання користувача

let searchUser = function (id, res) {// 5cae2e087b2e31118c5ee296
    User.findById({_id: id}).then((users) => {
        res.status(200).send(users);
    }).catch((error) => {
        res.status(500).send();
    });
};//виводить користувача по ідентифікатору

const user = new User ({name: 'Alex', kill:5,bug: 6, item: 2, email: 'rfcjknc@gmail.com', password: 'kiyujhngfb'});//ініціалізація об'єкта

module.exports.user = user;
module.exports.addUser = addUser;
module.exports.sendUser = sendUser;
module.exports.searchUser = searchUser;