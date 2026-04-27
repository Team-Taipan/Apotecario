import api from './api';

export const authService = {
  
  // Função de login
  login: async (email: string, senha: string) => {
    const response = await api.post('/usuario/login', { email, senha });
    return response.data;
  },

  // Função de registro
  register: async (email: string, senha: string, confirmarSenha: string) => {
    const response = await api.post('/usuario', { email, senha, confirmarSenha });
    return response.data;
  },

  // Função para criar perfil inicial
  createProfile: async (nome: string, avatarId: string) => {
    const response = await api.post('/usuario/perfil', {
      nome,
      avatar: avatarId,
      tipo: 'Titular',
      papel: 'Admin'
    });
    return response.data;
  }
};