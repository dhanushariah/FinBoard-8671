import { motion } from 'framer-motion';

const StatCard = ({ title, amount, variant = 'default' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm flex-1"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      <p className="text-3xl font-semibold">₹{amount}</p>
    </motion.div>
  );
};

export default StatCard;