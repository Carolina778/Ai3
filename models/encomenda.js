const mongoose = require('mongoose')

const EncomendaSchema = new mongoose.Schema({
    id_encomenda: mongoose.Schema.Types.ObjectId,
    estado:{
        type: String,
        enum:[
            "Criada",
            "Enviada",
            "Cancelada",
            "Entregue"
        ]
    },
    data_cria:{
        type: String,
        format: Date
    }
});

module.exports = mongoose.model('Encomenda', EncomendaSchema); 