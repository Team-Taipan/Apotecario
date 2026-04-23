import axios from 'axios';
import Constants from 'expo-constants';

// Pega o endereço do host que está rodando o Metro Bundler
// Isso retorna algo como "192.168.x.x:8081"
const debuggerHost = Constants.expoConfig?.hostUri;
const ip = debuggerHost?.split(':').shift(); // Extrai apenas o IP, removendo a porta

const api = axios.create({
  baseURL: `http://${ip}:4000`, // Mantém a porta do seu NestJS
  timeout: 5000, // Tempo limite de 5 segundos para as requisições
});

export default api;