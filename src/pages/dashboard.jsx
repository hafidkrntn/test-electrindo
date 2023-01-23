import ChartLine from "../components/chart/chartLine";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ChartLine />
      </div>
    </>
  );
};

export default Dashboard;
