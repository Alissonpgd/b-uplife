const mongoose = require('mongoose');

const Usuarios = mongoose.Schema(
    {  
        
        nome: {type: String, required: true },
        whatsapp: {type: Number, required: true },
        endereco: {type: String, required: true },
        numero: { type: Number, required: true },
        bairro: {type: String, required: true },
        cpf: {type: Number, required: true },
        email: {type: String, required: true },
        plano: {type: String, required: true },
        valor: {type: String, required: true },
        formapagamento: {type: String, required: true },
        datacadastro: {type: String, required: true },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model('usuarios',Usuarios);