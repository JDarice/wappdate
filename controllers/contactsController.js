const app = require("../app");
const { request, response, render } = require("../app");
const {Users} = require('../models');
const {Contacts} = require('../models');

const contactsController = {
    index: (request, response) => {
        response.render('contacts.ejs')
    },

    create: async (request, response) => {
        console.log(request.body);
        message = '';
        if(request.method == "POST"){
            let firstName = request.body.firstName;
            let lastName = request.body.lastName;
            let email = request.body.email;
            let phoneNumber = request.body.phoneNumber.replace('(','').replace(')','').replace(' ','').replace('-','');
            let cpfOrCnpj = request.body.cpfOrCnpj;
            let status = request.body.status;

            if(cpfOrCnpj.length == 11) {
                cpf = cpfOrCnpj;
                legalType = "Pessoa Física";

                console.log(firstName);
                console.log(lastName);
                console.log(email);
                console.log(phoneNumber);
                console.log(cpfOrCnpj);
                console.log(status);
                console.log(cpf);
                console.log(legalType);
    
                await Contacts.create({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    status,
                    legalType,
                    cpf
                });

            } else if(cpfOrCnpj.length == 14){
                cnpj = cpfOrCnpj;
                legalType = "Pessoa Jurídica";

                console.log(firstName);
                console.log(lastName);
                console.log(email);
                console.log(phoneNumber);
                console.log(cpfOrCnpj);
                console.log(status);
                console.log(cnpj);
                console.log(legalType);
    
                await Contacts.create({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    status,
                    legalType,
                    cnpj
                });

            } else {};

            message = "Parabéns! Um novo contato foi criado!";
            // response.redirect('/contatos');
            response.render('contacts.ejs', {message: message});
        } else {
            response.render('register.ejs', {message: message});
        }
    },

    login: (request, response) => {
        response.json(request.body);
    },

    register: (request, response) => {
        message = '';
        response.render('register.ejs');
    }
}

module.exports = contactsController;