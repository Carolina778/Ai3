const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
    id_produto: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    },
    tipo:{
        type: String
    },
    preço:{
        type: Number,
    },
    descrição:{
        type: String
    },
    disp:{
        type: String,
        enum:[
            "Disponível",
            "Esgotada"
        ]
    },
    stock:{
        type: Number,
    }
},
{versionKey: false}
);

module.exports = mongoose.model('Produto', ProdutoSchema); 