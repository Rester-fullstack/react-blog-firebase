import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Componentes
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
          
          <Navbar />

          <div className="p-4">
            <Routes>
              {/* Públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<Search />} />
              <Route path="/post/:id" element={<Post />} />

              {/* Privadas */}
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <CreatePost />
                  </PrivateRoute>
                }
              />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <EditPost />
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