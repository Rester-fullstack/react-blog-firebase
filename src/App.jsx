import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Componentes
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        
        {/* Layout geral */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          
          {/* Navbar */}
          <Navbar />

          {/* Conteúdo das páginas */}
          <div className="p-4">
            <Routes>
              {/* Públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              {/* Privada */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>

        </div>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;