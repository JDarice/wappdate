const app = require("../app");
const { request, response, render } = require("../app");
const {Users} = require('../models');
const {product} = require('../models');

const productController = {
    index: (request, response) => {
        response.render('product.ejs')
    },

    create: async (request, response) => {
        console.log(request.body);
        message = '';
        if(request.method == "POST"){
            let productName = request.body.productName;
            let descriptionProduct = request.body.descriptionProduct;
            let codeProduct = request.body.codeProduct;
            let model = request.body.model;
            let status = request.body.status;

            if(model.length == 6) {
                codigo = model;
                legalType = "Pessoa Física";

                console.log(productName);
                console.log(descriptionProduct);
                console.log(codeProduct);                
                console.log(model);
                console.log(status);
                console.log(codigo);
                console.log(legalType);
    
                await product.create({
                    productName,
                    descriptionProduct,
                    codeProduct,                    
                    status,
                    legalType,
                    codigo
                });

            } else {};

            message = "Parabéns! Um novo produto foi criado!";
            // response.redirect('/produtos');
            response.render('product.ejs', {message: message});
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

module.exports = productController;