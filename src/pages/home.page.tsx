import Header from "../components/header";
import InvoiceStats from "../components/invoice.stats";

const HomePage = () => {
  return (
    <div className="w-w960 bg-neutral-800 rounded-lg">
      <Header />
      <div className="flex gap-3 pt-10">
        <div className="w-w660">left</div>
        <InvoiceStats />
      </div>
    </div>
  );
};

export default HomePage;
