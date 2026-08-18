const { Router } = require('express');
const router = Router();
const { buscasPessoas, atualizaPessoa, deletaPessoa, criacaoPessoa, buscasPessoaPorId  } = require('./passoa.controller');


router.get('/', buscasPessoas);
router.get('/:id', buscasPessoaPorId);
router.post('/', criacaoPessoa);
router.put('/:id', atualizaPessoa);
router.delete('/:id', deletaPessoa);


module.exports = router;