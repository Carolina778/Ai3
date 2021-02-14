const mongoose = require('mongoose')

const UtilizadorSchema = new mongoose.Schema({
    id_funcionario: mongoose.Schema.Types.ObjectId,
    funcionario:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    }, 
    password:{
        type: String,
        required: true
    },
    username:{ 
        type: String,
        required: true,

    },
    datanasc:{
        type: String,
        required: true,
    },
    cargo:{
        type: String,
        required: true,
        enum:[
            "funcionário",
            "administrador"
        ]
    }
},
{versionKey: false}
);

module.exports = mongoose.model('Utilizador', UtilizadorSchema);