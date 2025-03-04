import StatCard from '../components/StatCard';
import ReactECharts from 'echarts-for-react';

const Dashboard = () => {
  const moneyFlowOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: { type: 'value' },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    }],
    tooltip: { trigger: 'axis' },
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Balance" amount="25,79,957" />
        <StatCard title="Income" amount="45,79,957" />
        <StatCard title="Expense" amount="15,79,957" />
        <StatCard title="Total Savings" amount="75,79,957" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Money Flow</h2>
          <ReactECharts option={moneyFlowOptions} style={{ height: '300px' }} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Budget Overview</h2>
          {/* Budget content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;