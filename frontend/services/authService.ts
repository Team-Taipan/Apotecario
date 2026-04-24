import api from './api';

export const authService = {
  // Função de login
  login: async (email: string, senha: string) => {
    const response = await api.post('/usuario/login', { email, senha });
    return response.data;
  },

  // Função de registro
  register: async (email: string, senha: string, confirmarSenha: string) => {
    // Agora enviamos os três campos que o seu DTO no Backend espera
    const response = await api.post('/usuario/', { email, senha, confirmarSenha });
    return response.data;
  }
};