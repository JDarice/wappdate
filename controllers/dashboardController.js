const app = require("../app");
const { request, response, render } = require("../app");
const { Users } = require('../models');
const { Contacts } = require('../models');
const Op = require("sequelize").Op;

const messengerController = {
    index: (request, response) => {
        response.render('dashboard.ejs')
    }
}

module.exports = messengerController;