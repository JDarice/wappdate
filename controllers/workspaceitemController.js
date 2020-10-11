// const app = require("../app");
// const { request, response, render } = require("../app");
// const {WorkSpaceItems} = require('../models');
// const {Queues} = require('../models')

// const workspaceitemController = {
//     index: async(request, response) =>{
//         const queues = await Queues.findAll({
//             where:{createdByUserId:1}
//         });
//        console.log(queues)
//         response.render('expediente.ejs', {queues})
//     }
// }


// module.exports = workspaceitemController

const app = require("../app");
const { request, response, render } = require("../app");
const {Users} = require('../models');
const {Queues} = require('../models');
const Op = require("sequelize").Op;

const queuesController = {
    index: (request, response) => {
        response.render('queues.ejs')
    },

    create: async (request, response) => {
        console.log(request.body);
        confirmationAlert = '';
        request.method == "POST"
            let queueName = request.body.queueName;
            let positions = request.body.positions;
            let queueType = request.body.lineEach;
           

                console.log(queueName);
                console.log(positions);
    
                await Queues.create({
                    queueName,
                    positions,
                    queueType,
                
                                   
                });
            

            confirmationAlert = "Uma nova fila foi criada!";
            // response.redirect('/contatos');
            response.render('queues.ejs', {confirmationAlert: confirmationAlert});
       
    },

    newSearch: async (request, response) => {
        
        return response.json(request.query);
    },

    login: (request, response) => {
        response.json(request.query);
    },

    register: (request, response) => {
        message = '';
        response.render('register.ejs');
    }
}

module.exports = queuesController;