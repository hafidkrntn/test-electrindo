import ChartLine from "../components/chart/chartLine";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ChartLine />
      </div>
    </div>
  );
};

export default Dashboard;
