
const form = document.getElementById('formulario');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error-msg');
const btnSubmit = document.getElementById('btn-submit');


const setCarregando = (estado) => {
    loading.style.display = estado ? 'block' : 'none';
    errorMsg.style.display = 'none'; 
};

const mostrarErro = (mensagem) => {
    errorMsg.textContent = mensagem;
    errorMsg.style.display = 'block';
};



const renderList = (pessoas) => {
    const pessoasContainer = document.getElementById('pessoas');
    pessoasContainer.innerHTML = '';
    console.log('Pessoas recebidas:', pessoas);
    
    pessoas.forEach((pessoa) => {
        const pessoaElement = document.createElement('div');
        
        pessoaElement.classList.add('cartao-pessoa');

        pessoaElement.innerHTML = `
            <div class="cartao-pessoa">
                <p class="dados-pessoa">
                    <strong>Nome:</strong> ${pessoa.nome} <br> 
                    <strong>Idade:</strong> ${pessoa.idade} anos <br> 
                    <strong>Email:</strong> ${pessoa.email}
                </p>
            </div>
        `;
        
        pessoasContainer.appendChild(pessoaElement);
    });
}; 


// 1. Primeira coisa que o exercicio pede que é buscar com Axios e limitar a 5 resultados
const buscaPessoas = async () => {
    setCarregando(true);
    try {

        const response = await axios.get('http://localhost:3001/pessoa');
        

        const cincoPrimeiros = response.data.slice(0, 5); 
        renderList(cincoPrimeiros); 
    } 
    catch (error) {
        mostrarErro('Não foi possível carregar a lista de pessoas. Verifique o servidor.');
        console.error('Erro ao buscar pessoas:', error);
    } finally {
        setCarregando(false);
    }
}; 


// 2. segunda coisa que o exercicio pede que é mandar via axios.post
async function enviarPessoa(pessoa) {
    setCarregando(true);
    try {

        const response = await axios.post('http://localhost:3001/pessoa', pessoa);
        console.log('Pessoa enviada com sucesso:', response.data);
        
        await buscaPessoas();
        form.reset();
    } catch (error) {
        mostrarErro('Falha ao cadastrar a pessoa. Tente novamente.');
        console.error('Erro ao enviar pessoa:', error);
    } finally {
        setCarregando(false);
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    

    btnSubmit.disabled = true; 
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    
    if (!nome || !idade || !email) {
        mostrarErro('Por favor, preencha todos os campos.');
        btnSubmit.disabled = false;
        return;
    }
    
    const pessoa = { nome, idade, email };
    

    await enviarPessoa(pessoa);
    btnSubmit.disabled = false; 
});


buscaPessoas();