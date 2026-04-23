import React, { createContext, useState, useEffect, useContext } from 'react';
import { authStorage } from '../services/authStorage';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(token: string): Promise<void>;
    signOut(): void;
}

/**
 * Contexto de Autenticação
 * Este contexto é responsável por gerenciar o estado de autenticação do usuário em toda a aplicação, pense nele como um Singleton, onde gerenciamos o estado de autenticação (se o usuário está logado ou não) para todos os componentes. O contexto utiliza o serviço de armazenamento seguro para salvar o token de autenticação e o Axios para configurar as requisições com o token automaticamente.
 * Ele resolve dois problemas:
    Compartilhamento: Evita que tenha que passar o token de tela em tela.
    Persistência: Decide se redireciona o usuário para o Login ou para a Home assim que o app abre.
 */

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            // Verifica se existe um token armazenado
            const storagedToken = await authStorage.getToken();
            
            if (storagedToken) {
                // Configura o token nas requisições futuras do Axios automaticamente
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
                setUser({ token: storagedToken });
            }

            setLoading(false);
        }

        loadStorageData();
    }, []);

    async function signIn(token: string) {
        setUser({ token });
        // Injeta o token no cabeçalho do Axios logo após o login
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    function signOut() {
        authStorage.removeToken();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para facilitar o uso
export function useAuth() {
    return useContext(AuthContext);
}