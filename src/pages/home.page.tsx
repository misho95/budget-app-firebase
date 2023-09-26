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
          <div className="flex flex-col justify-between gap-1 m-2 bg-neutral-900 rounded-lg border-px1 border-neutral-500/50 overflow-hidden relative z-20 h-full">
            <div className="flex flex-col gap-1">
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
              <InvoiceBox
                id={1}
                amount={300}
                category={"invoice"}
                date={"20-05-1995"}
                status={true}
              />
              <InvoiceBox
                id={1}
                amount={300}
                category={"invoice"}
                date={"20-05-1995"}
                status={true}
              />
            </div>
            <div className="text-neutral-500 flex gap-3 justify-between p-3">
              <button className="flex justify-center items-center gap-1">
                <span className="material-symbols-outlined">arrow_back</span>
                Prev
              </button>
              <div className="flex gap-3">
                <button>1</button>
                <button>2</button>
                <span>...</span>
                <button className="text-orange-500">5</button>
                <button>6</button>
              </div>
              <button className="flex justify-center items-center gap-1">
                Next
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
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
