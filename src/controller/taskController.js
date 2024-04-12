const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.title,
        request.body.description
    );

    const query = "INSERT INTO db_tasks(tittle,description) VALUES(?,?)";

    connection.query(query, params, (err, resulst) => {
        if(results) {
        response
            .status(201)
            .json({
            sucess: true,
            message: "Sucesso!",
            data: results
            })
        } else{
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "ops, deu problema!",
                })
        }
    })
}


module.exports = {
    storeTask
}