const mongoose = require('mongoose')

const UtilizadorSchema = new mongoose.Schema({
    id_funcionario: mongoose.Schema.Types.ObjectId,
    funcionario:{
        type: String,
        required: true
    },
    email:{
        type: String
    }, 
    password:{
        type: String
    },
    username:{ 
        type: String
    },
    datanasc:{
        type: String
    },
    cargo:{
        type: String,
        enum:[
            "funcionário",
            "administrador"
        ]
    }
},
{versionKey: false}
);

module.exports = mongoose.model('Utilizador', UtilizadorSchema);