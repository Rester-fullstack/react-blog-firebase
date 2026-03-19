// Importa funções 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "SUA_CHAVE_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

//Exporta o serviço de autentificação
export const auth = getAuth(app);

// Banco de dados (POSTS)
export const db = getFirestore(app);