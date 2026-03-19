# React Blog Firebase

Projeto de blog desenvolvido com **React**, **Firebase Authentication** e **Cloud Firestore**, permitindo criar, editar, excluir e buscar posts.

---

## Tecnologias

- React (Hooks, Router, Framer Motion)  
- Firebase (Auth, Firestore)  
- Tailwind CSS  
- Vite  

---

## Funcionalidades

- Registro e login de usuários  
- Criar, editar e excluir posts  
- Listagem de posts por data  
- Busca de posts pelo título  
- Dashboard do usuário  

---

## Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)  
2. Ative **Authentication → Email/Password**  
3. Crie uma coleção chamada `posts` no **Cloud Firestore**  
4. Configure as variáveis de ambiente em `.env`:


VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID


---

## Instalação

Clone o repositório:

git clone https://github.com/Rester-fullstack/react-blog-firebase.git
cd react-blog-firebase

----= Instale as dependências ----

npm install

---- Inicie o projeto ----

npm run dev

O aplicativo estará disponível em http://localhost:5173.

---- Estrutura do Projeto ----

src/
├─ components/
│  └─ Navbar.jsx
├─ hooks/
│  └─ useAuthentication.js
├─ pages/
│  ├─ CreatePost/
│  ├─ Dashboard.jsx
│  ├─ EditPost/
│  ├─ Home.jsx
│  ├─ Login.jsx
│  ├─ Post/
│  └─ Search/
├─ firebase/
│  └─ config.js
└─ App.jsx


---- Uso ----

Login ou registro de usuário

Criar, editar e excluir posts no Dashboard

Listagem de posts na Home

Buscar posts pelo título

---- Segurança ----

Rotas protegidas por Firebase Authentication

UID do usuário armazenado com cada post

Variáve
