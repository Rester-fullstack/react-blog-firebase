import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

function PrivateRoute ({children}) {
    const { user, loading } = useAuth();

    // Enquanto verifica login
    if(loading){
        return <p>Carregando...</p>
    }

    // Se NÃO estiver logado > redirecionar
    if(!user) {
        return<Navigate to= "/login"></Navigate>
    }

    // Se estiver logado > mostra a página
    return children;
}

export default PrivateRoute;