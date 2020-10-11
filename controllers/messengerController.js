const app = require("../app");
const { request, response, render } = require("../app");
const { Users } = require('../models');
const { MessageChannelSettings } = require('../models');
const Op = require("sequelize").Op;

const messengerController = {
    index: (request, response) => {
        response.render('messengerSettingsSMS.ejs')
    },

    settings: (request, response) => {
        response.render('messengerSettingsSMS.ejs')
    },

    createSentFrom: async (request, response) => {
        console.log(request.body);
        if (request.method == "POST") {
            let sentFromName = request.body.businessFromName;
            let channelType = "SMS";

            console.log(sentFromName);
            console.log(channelType);

            await MessageChannelSettings.create({
                sentFromName,
                channelType
            });

            nextStepForm1Complete = true;
            response.render('messengerSettingsSMS.ejs', { nextStepForm1Complete: nextStepForm1Complete });
        } else {
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
        };
    },

    newSearch: async (request, response) => {
        const id = 1;
        let filter = { where: {} };
        if (!!id) {
            filter = {
                where: {
                    ...filter.where, id: id
                }
            }
        }
        return response.json(await MessageChannelSettings.findAll(filter))
    },

    edit: async (request, response) => {
        createContacFormVisibility = true;
        response.render('contacts.ejs', { createContacFormVisibility: createContacFormVisibility });
    },

    update: async (request, response) => {
        const id = 1;
        confirmationAlert = '';
        if (request.method == "PUT") {
            let sentFromName = request.body.businessFromName;

            await MessageChannelSettings.update({
                sentFromName
            },
                {
                    where: {
                        id,
                    }
                });
            confirmationAlert = "Parabéns! Remetente atualizado com sucesso!";
            response.render('messengerSettingsSMS.ejs', { confirmationAlert: confirmationAlert });
        } else {
        resporesponse.render('register.ejs', { confirmationAlert: confirmationAlert });
    }
},

login: (request, response) => {
    response.json(request.query);
},

    register: (request, response) => {
        message = '';
        response.render('register.ejs');
    }
}

module.exports = messengerController;