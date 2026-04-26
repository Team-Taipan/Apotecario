import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'user_token';
const IS_NEW_KEY = 'user_is_new';

/** 
 * Serviço de armazenamento de autenticação usando SecureStore
 * Este serviço é responsável por salvar, recuperar e remover o token de autenticação do usuário de forma segura, usando criptografia. Ele utiliza a biblioteca expo-secure-store, que é recomendada para armazenar informações sensíveis em aplicativos Expo.
 */
export const authStorage = {
    // Salva o token
    saveToken: async (token: string) => {
        try {
            // Garante que o valor seja string antes de salvar
            const valueToSave = typeof token === 'string' ? token : JSON.stringify(token);
            await SecureStore.setItemAsync(TOKEN_KEY, valueToSave);
        } catch (error) {
            console.error("Erro ao salvar o token:", error);
        }
    },

    // Busca o token
    getToken: async () => {
        try {
            return await SecureStore.getItemAsync(TOKEN_KEY);
        } catch (error) {
            console.error("Erro ao recuperar o token:", error);
            return null;
        }
    },

    // Remove o token (Logout)
    removeToken: async () => {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            await SecureStore.deleteItemAsync(IS_NEW_KEY);
        } catch (error) {
            console.error("Erro ao remover o token:", error);
        }
    },

    // Salva o flag isNew para indicar se o usuário é novo ou não
    // Isso é para decidir se o usuário deve ser redirecionado para a tela de perfil ou para a home após o login.
    saveIsNew: async (isNew: boolean) => {
        try {
            await SecureStore.setItemAsync(IS_NEW_KEY, isNew ? 'true' : 'false');
        } catch (error) {
            console.error("Erro ao salvar isNew:", error);
        }
    },

    // Busca o flag isNew 
    getIsNew: async (): Promise<boolean> => {
        try {
            const value = await SecureStore.getItemAsync(IS_NEW_KEY);
            return value === 'true';
        } catch (error) {
            console.error("Erro ao recuperar isNew:", error);
            return false;
        }
    }
};