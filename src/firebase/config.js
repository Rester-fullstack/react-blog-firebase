// Importa funções 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYR2TbHO-EoUtQyBbKjM1pV2lRljYWWME",
  authDomain: "blog-react-firebase-e3088.firebaseapp.com",
  projectId: "blog-react-firebase-e3088",
  storageBucket: "blog-react-firebase-e3088.firebasestorage.app",
  messagingSenderId: "199886371661",
  appId: "1:199886371661:web:eec8a40c5ea5658e761504"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

//Exporta o serviço de autentificação
export const auth = getAuth(app);