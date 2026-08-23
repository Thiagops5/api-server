const { findAll, findById, create } = require('./pessoa.service');


const buscasPessoas = async (req, res) => {
    try {
        // MUDANÇA: Captura o "_limit" da URL se ele existir
        const limit = req.query._limit;
        
        // MUDANÇA: Envia o limite para o Serviço cortar a lista
        const pessoas = await findAll(limit);
        res.send(pessoas);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const buscasPessoaPorId = async (req, res) => {
    const id = req?.params?.id;
    if (!id) {
        res.status(400).send('ID da pessoa não fornecido');
        return;
    }
    try {
        const pessoa = await findById(id);
        if (!pessoa) {
            res.status(404).send('Pessoa não encontrada');
            return;
        }
        res.send(pessoa);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const criacaoPessoa = async (req, res) => {
    try {
        const pessoa = req.body;
        const novaPessoa = await create(pessoa);
        res.status(201).send(novaPessoa);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const atualizaPessoa = (req, res) => {
    res.send('atualiza uma pessoa existente');
}

const deletaPessoa = (req, res) => {
    res.send('deleta uma pessoa existente');
}

module.exports = {
    buscasPessoas,
    buscasPessoaPorId,
    criacaoPessoa,
    atualizaPessoa,
    deletaPessoa
}