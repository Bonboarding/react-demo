import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Users from './components/Users';
import Settings from './components/Settings';
import AuthGuard from './guards/AuthGuard';
import { UserProvider } from './services/UserService';

import './styles.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <AuthGuard>
              <>
                <div className="flex h-screen bg-gray-100">
                  <Sidebar />
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                      <div className="container mx-auto px-6 py-8">
                        <Routes>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/statistics" element={<Statistics />} />
                          <Route path="/users" element={<Users />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="/*" element={<Dashboard />} />
                        </Routes>
                      </div>
                    </main>
                  </div>
                </div>
              </>
            </AuthGuard>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
