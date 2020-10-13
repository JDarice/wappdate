const app = require("../app");
const { request, response, render } = require("../app");
const { Users } = require('../models');
const { MessageChannelSettings } = require('../models');
const { MessageTemplates } = require('../models');
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
            let sentFromName = request.body.businessFromName.toUpperCase();
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

    newSearchSender: async (request, response) => {
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
            let sentFromName = request.body.businessFromName.toUpperCase();

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
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
        }
    },

    newSearchTemplates: async (request, response) => {
        const id = request.query.id;
        const messageName = request.query.nome;
        let filter = { where: {} };
        if (!!id) {
            filter = {
                where: {
                    ...filter.where, id: id
                }
            }
        }
        if (!!messageName) {
            filter = {
                where: {
                    ...filter.where,
                    messageName: {
                        [Op.like]: '%' + messageName + '%'
                    }
                }
            }
        }
        return response.json(await MessageTemplates.findAll(filter))
    },

    templates: async (request, response) => {
        response.render('messengerTemplatesSMS.ejs')
    },

    createTemplatesFromSettings: async (request, response) => {
        console.log(request.body);
        if (request.method == "POST") {

            if (!!request.body.forProductStageStarted) {

                let messageChannelSettings_id = 1;
                let messageName = "Exemplo de produto iniciado"
                let messageChannel = "SMS";
                let messageContent = request.body.forProductStageStarted;
                let forProductStage = "started";
                // let hasSpecialCharacter,
                // let countOfUsedCharacters,
                // let countOfAvailableCharacters,

                await MessageTemplates.create({
                    messageChannelSettings_id,
                    messageName,
                    messageChannel,
                    messageContent,
                    forProductStage
                    // hasSpecialCharacter,
                    // countOfUsedCharacters,
                    // countOfAvailableCharacters,
                });

            };

            if (!!request.body.forProductStageReady) {

                let messageChannelSettings_id = 1;
                let messageName = "Exemplo de produto pronto"
                let messageChannel = "SMS";
                let messageContent = request.body.forProductStageReady;
                let forProductStage = "ready";
                // let hasSpecialCharacter,
                // let countOfUsedCharacters,
                // let countOfAvailableCharacters,

                await MessageTemplates.create({
                    messageChannelSettings_id,
                    messageName,
                    messageChannel,
                    messageContent,
                    forProductStage
                    // hasSpecialCharacter,
                    // countOfUsedCharacters,
                    // countOfAvailableCharacters,
                });

            };

            nextStepForm2Complete = true;
            response.render('messengerSettingsSMS.ejs', { nextStepForm2Complete: nextStepForm2Complete });
        } else {
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
        };
    },

    createTemplates: async (request, response) => {
        console.log(request.body);
        confirmationAlert = "";
        if (request.method == "POST") {

            let messageChannelSettings_id = 1;
            let messageName = request.body.messageName;
            let messageChannel = "SMS";
            let messageContent = request.body.messageContent;
            let forProductStage = request.body.forProductStage;
            // let hasSpecialCharacter,
            // let countOfUsedCharacters,
            // let countOfAvailableCharacters,

            await MessageTemplates.create({
                messageChannelSettings_id,
                messageName,
                messageChannel,
                messageContent,
                forProductStage
                // hasSpecialCharacter,
                // countOfUsedCharacters,
                // countOfAvailableCharacters,
            });

            confirmationAlert = "Parabéns! Template criado com sucesso!";
            response.render('messengerTemplatesSMS.ejs', { confirmationAlert: confirmationAlert });
        } else {
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
        };
    },

    updateTemplates: async (request, response) => {
        const { id } = request.params;
        console.log(request.body);
        confirmationAlert = "";
        if (request.method == "PUT") {
            let messageChannelSettings_id = 1;
            let messageName = request.body.messageName;
            let messageChannel = "SMS";
            let messageContent = request.body.messageContent;
            let forProductStage = request.body.forProductStage;
            // let hasSpecialCharacter,
            // let countOfUsedCharacters,
            // let countOfAvailableCharacters,

            await MessageTemplates.update({
                messageChannelSettings_id,
                messageName,
                messageChannel,
                messageContent,
                forProductStage
                // hasSpecialCharacter,
                // countOfUsedCharacters,
                // countOfAvailableCharacters,
            },
                {
                    where: {
                        id,
                    }
                });

            confirmationAlert = "Parabéns! Template atualizado com sucesso!";
            response.render('messengerTemplatesSMS.ejs', { confirmationAlert: confirmationAlert });
        } else {
            response.render('register.ejs', { confirmationAlert: confirmationAlert });
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

module.exports = messengerController;