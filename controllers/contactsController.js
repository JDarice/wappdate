const app = require("../app");
const { request, response, render } = require("../app");
const { Users } = require('../models');
const { Contacts } = require('../models');
const Op = require("sequelize").Op;

const contactsController = {
    index: (request, response) => {
        response.render('contacts.ejs')
    },

    create: async (request, response) => {
        console.log(request.body);
        confirmationAlert = '';
        if (request.method == "POST") {
            let firstName = request.body.firstName;
            let lastName = request.body.lastName;
            let email = request.body.email;
            let phoneNumber = request.body.phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
            let cpfOrCnpj = request.body.cpfOrCnpj;
            let status = request.body.status;
            if (status == null) {
                status = "Inactive";
            };


            if (cpfOrCnpj.length == 11) {
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

            };
            if (cpfOrCnpj.length == 14) {
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

            confirmationAlert = "Parabéns! Um novo contato foi criado!";
            // response.redirect('/contatos');
            response.render('contacts.ejs', { confirmationAlert: confirmationAlert });
        } else {
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
        };
    },

    newSearch: async (request, response) => {
        const email = request.query.email;
        const id = request.query.id;
        const nome = request.query.nome;
        let filter = { where: {} };
        if (!!email) {
            filter = {
                where: {
                    ...filter.where, email: email
                }
            }
        }
        if (!!id) {
            filter = {
                where: {
                    ...filter.where, id: id
                }
            }
        }
        if (!!nome) {
            filter = {
                where: {
                    ...filter.where,
                    [Op.or]: [
                        {
                            firstName: {
                                [Op.like]: '%' + nome + '%'
                            }
                        },
                        {
                            lastName: {
                                [Op.like]: '%' + nome + '%'
                            }
                        }
                    ]
                }
            }
        }
        console.log(email, filter, request.params);
        return response.json(await Contacts.findAll(filter))
    },

    // edit: async (request, response) => {
    //     const { id } = request.params;
    //     const contact = await Contacts.findOne({
    //         where: {
    //             id,
    //         }
    //     });

    //     return response.render('contacts.ejs', { contact });
    // },

    update: async (request, response) => {
        const { id } = request.params;
        confirmationAlert = '';
        if (request.method == "PUT") {
            let firstName = request.body.firstName;
            let lastName = request.body.lastName;
            let email = request.body.email;
            let phoneNumber = request.body.phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
            let cpfOrCnpj = request.body.cpfOrCnpj;
            let status = request.body.status;
            if (status == null) {
                status = "Inactive";
            };

            if (cpfOrCnpj.length == 11) {
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

                await Contacts.update({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    status,
                    legalType,
                    cpf
                    }, 
                    {
                    where: {
                        id,
                    }
                });

            };
            if (cpfOrCnpj.length == 14) {
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

                await Contacts.update({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    status,
                    legalType,
                    cnpj
                    }, 
                    {
                    where: {
                        id,
                    }
                });

            } else {};

            confirmationAlert = "Parabéns! Contato atualizado com sucesso!";
            response.render('contacts.ejs', { confirmationAlert: confirmationAlert });
            console.log("status: " + request.body.status);
        } else {
        resporesponse.render('register.ejs', { confirmationAlert: confirmationAlert });
        };
    },

    login: (request, response) => {
        response.json(request.query);
    },

    register: (request, response) => {
        message = '';
        response.render('register.ejs');
    }
}

module.exports = contactsController;