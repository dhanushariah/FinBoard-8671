import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Wallet from './pages/Wallet';
import DarkModeToggle from './components/DarkModeToggle';

// Placeholder component for unimplemented pages
const PlaceholderPage = ({ title }) => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-6 dark:text-white">{title}</h2>
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <p className="text-gray-600 dark:text-gray-300">This feature is coming soon!</p>
    </div>
  </div>
);

function App() {
  const [user] = useState({
    name: 'Ariah',
    email: 'dhanushariah@gmail.com'
  });

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen font-poppins bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <div className="flex-1">
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4">
              <Header user={user} />
              <DarkModeToggle />
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/goals" element={<PlaceholderPage title="Goals" />} />
              <Route path="/budget" element={<PlaceholderPage title="Budget" />} />
              <Route path="/subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
              <Route path="/debts" element={<PlaceholderPage title="Debts & EMI" />} />
              <Route path="/notes" element={<PlaceholderPage title="Notes" />} />
              <Route path="/taxes" element={<PlaceholderPage title="Taxes" />} />
              <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
              <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
              <Route path="/help" element={<PlaceholderPage title="Help Center" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;