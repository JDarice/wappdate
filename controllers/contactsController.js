const { request, response, render } = require("../app");
const {Users} = require('../models');


const contactsController = {
    index: (request, response) => {
        response.render('contacts.ejs')
    },

    login: (request, response) => {
        response.json(request.body);
    },

    register: (request, response) => {
        message = '';
        response.render('register.ejs');
    },

    store: (request, response) => {
        message = '';
        if(request.method == "POST"){
            let email = request.body.email;
            let username = request.body.username;
            let password = request.body.password;

            Users.create({
                email,
                username,
                password,
            });

            message = "Parabéns! Sua conta foi criada";
            response.render('register.js', {message: message});
        } else {
            response.render('register.js', {message: message});
        }
    }

}

module.exports = contactsController;