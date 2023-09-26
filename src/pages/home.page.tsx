import Header from "../components/header";
import HeaderStat from "../components/header.stat";
import InvoiceBox from "../components/invoice.box";
import InvoiceStats from "../components/invoice.stats";
import StatistsStats from "../components/statistis.stats";

const HomePage = () => {
  return (
    <div className="w-w960 bg-neutral-800 rounded-lg">
      <Header />
      <div className="flex gap-3 pt-10">
        <div className="w-w660 flex flex-col gap-3">
          <HeaderStat />
          <div className="flex flex-col gap-1 m-2 bg-neutral-900 rounded-lg border-px1 border-neutral-500/50 overflow-hidden h-full relative z-50 h-80">
            <InvoiceBox
              id={1}
              amount={500}
              category={"shopping"}
              date={"20-05-1995"}
              status={false}
            />
            <InvoiceBox
              id={1}
              amount={300}
              category={"invoice"}
              date={"20-05-1995"}
              status={true}
            />
            <InvoiceBox
              id={1}
              amount={500}
              category={"shopping"}
              date={"20-05-1995"}
              status={false}
            />
            <InvoiceBox
              id={1}
              amount={300}
              category={"invoice"}
              date={"20-05-1995"}
              status={true}
            />
            <InvoiceBox
              id={1}
              amount={500}
              category={"shopping"}
              date={"20-05-1995"}
              status={false}
            />
            <InvoiceBox
              id={1}
              amount={300}
              category={"invoice"}
              date={"20-05-1995"}
              status={true}
            />
          </div>
        </div>
        <div className="w-w300 flex flex-col gap-9">
          <StatistsStats />
          <InvoiceStats />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
