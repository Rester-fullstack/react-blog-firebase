function Dashboard() {
  return (
    <div className="p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-bold">Usuários</h2>
          <p className="text-3xl text-green-400 mt-2">120</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-bold">Posts</h2>
          <p className="text-3xl text-blue-400 mt-2">45</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-bold">Acessos</h2>
          <p className="text-3xl text-purple-400 mt-2">1.2k</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;