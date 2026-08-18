const { findAll, findById } = require('./pessoa.service');




const buscasPessoas = async (req, res) => {
    try {
        const pessoas = await findAll();
        res.send(pessoas);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const buscasPessoaPorId = async (req, res) => {
 const { id } = req?.params;
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

const criacaoPessoa = (req, res) => {
    res.send('cria uma nova pessoa');
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