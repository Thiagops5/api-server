const api = require('../api');

module.exports = {
  findAll: async (limit) => {
    try {
      const response = await api.get('/pessoa');
      let dados = response.data;
      if (limit) {
        dados = dados.slice(0, parseInt(limit));
      }
      return dados;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const response = await api.get(`/pessoa/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  create: async (novaPessoa) => {
    try {
      const response = await api.post('/pessoa', novaPessoa);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}