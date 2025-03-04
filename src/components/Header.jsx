import { FaSearch, FaBell } from 'react-icons/fa';

const Header = ({ user }) => {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, {user.name}!</h1>
        <p className="text-gray-500">It's the best time to manage your finances</p>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="What are my upcoming expenses?"
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">DA</span>
          </div>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;