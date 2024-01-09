 
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PaymentProvider from "../components/PaymentProvider";


const Dashboard = () => {
  return (
    <div className="flex w-full h-full">
      <Navbar />
      <div className="w-full">
        <Header />
        <PaymentProvider/>
 
      </div>
    </div>
  );
};

export default Dashboard;
