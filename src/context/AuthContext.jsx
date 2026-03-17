import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// Cria o contexto global
const AuthContext = createContext();

// Provider (envolve toda aplicação)
export function AuthProvider ({ children }) {
    // Guarda o usuário logado
    const [user, setUser] = useState(null);

    // Controla carregamento (evita bug de tela piscando)
    const [loading, setLoading] = useState(true);

    // Executa quando app inicia
    useEffect(() => {
    //Escuta mundanças de login/logout
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
        setUser(usuario); // Atualiza usuário
        setLoading (false); // Finaliza carregamento
    });

    // Limpa o listener quando demontar
    return () => unsubscribe();
    },[]);

    return(
        //Disponibilizar user e loading para a toda alicação
        <AuthContext.Provider value={{user,loading}}>
         {children}
        </AuthContext.Provider>
    )
}

// Hook personalizado para usar o contexto
export function useAuth(){
    return useContext(AuthContext);
}

