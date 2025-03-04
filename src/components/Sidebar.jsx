import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaWallet, FaChartLine, FaBullseye, FaFileInvoiceDollar, FaCreditCard, FaFileAlt, FaCalculator, FaChartBar, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: FaHome, text: 'Dashboard', path: '/dashboard' },
    { icon: FaFileInvoiceDollar, text: 'Transactions', path: '/transactions' },
    { icon: FaWallet, text: 'Wallet', path: '/wallet' },
    { icon: FaBullseye, text: 'Goals', path: '/goals' },
    { icon: FaCalculator, text: 'Budget', path: '/budget' },
    { icon: FaCreditCard, text: 'Subscriptions', path: '/subscriptions' },
    { icon: FaFileAlt, text: 'Debts & EMI', path: '/debts' },
    { icon: FaFileAlt, text: 'Notes', path: '/notes' },
    { icon: FaCalculator, text: 'Taxes', path: '/taxes' },
    { icon: FaChartBar, text: 'Analytics', path: '/analytics' },
  ];

  const bottomItems = [
    { icon: FaCog, text: 'Settings', path: '/settings' },
    { icon: FaQuestionCircle, text: 'Help', path: '/help' },
    { icon: FaSignOutAlt, text: 'Logout', path: '/logout' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 bg-secondary min-h-screen text-white p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8 text-primary">xpense.ai</div>
      
      <div className="text-sm text-gray-400 mb-4">NAVIGATION</div>
      
      <div className="flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center space-x-3 p-3 rounded-lg mb-2 cursor-pointer ${
              location.pathname === item.path ? 'bg-primary' : 'hover:bg-primary/10'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4">
        {bottomItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center space-x-3 p-3 rounded-lg mb-2 cursor-pointer hover:bg-primary/10 ${
              location.pathname === item.path ? 'bg-primary' : ''
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;