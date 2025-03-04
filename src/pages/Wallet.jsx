import { FaCreditCard, FaWallet } from 'react-icons/fa';

const Wallet = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">My Wallet</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <FaCreditCard className="text-2xl" />
            <span className="text-sm">**** **** **** 4242</span>
          </div>
          <div className="mt-4">
            <p className="text-sm opacity-80">Available Balance</p>
            <p className="text-2xl font-semibold">₹25,79,957</p>
          </div>
          <div className="mt-8">
            <p className="text-sm">VALID THRU</p>
            <p>12/25</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Quick Transfer</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Account Number"
              className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              type="text"
              placeholder="Amount"
              className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90">
              Transfer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;