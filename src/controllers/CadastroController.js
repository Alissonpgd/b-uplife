const Usuarios = require('../models/Usuarios');

module.exports = {
    async index (req, res) {

        const aluno = await Usuarios.find()
        res.json(aluno);
    },


    create(req, res) {
        const {nome, whatsapp, endereco, numero, bairro, cpf, email, plano, valor, formapagamento,datacadastro }= req.body;

        const data = {nome, whatsapp, endereco, numero, bairro, cpf, email, plano, valor, formapagamento,datacadastro }

        Usuarios.create(data) 
        return res.status(200).json(data);     
    },

    async show (req, res) {

        const {_id} = req.params;
        const aluno = await Usuarios.findOne({_id})
        res.json(aluno);
    },

    async delete(req, res){

        const {_id} = req.params;

        const aluno = await Usuarios.findByIdAndRemove({_id});
            
        return res.json(aluno);
    },
    async update(req, res){

        const {_id, nome, whatsapp, endereco, numero, bairro, cpf, email, plano, valor, formapagamento,datacadastro } = req.body;
        
        const data = {_id, nome, whatsapp, endereco, numero, bairro, cpf, email, plano, valor, formapagamento,datacadastro};
        
        const aluno = await Usuarios.findByIdAndUpdate({_id},data, {new:true});
            
        res.json(aluno);
    }

}


