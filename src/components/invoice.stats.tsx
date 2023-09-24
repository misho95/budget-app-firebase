import { VictoryPie } from "victory";

const InvoiceStats = () => {
  return (
    <div className="w-w300 h-h350 bg-neutral-500 border-b16 rounded-md border-neutral-500 flex justify-center items-center relative">
      {/* //RoundedBorders */}
      <div className="w-8 h-8 bg-neutral-800 absolute -top-12 -right-4 rounded-lg z-10"></div>
      <div className="w-4 h-6 bg-neutral-500 absolute -top-8 -right-4"></div>
      <div className="w-8 h-8 bg-neutral-800 absolute -bottom-4 -left-12 rounded-lg z-10"></div>
      <div className="w-4 h-6 bg-neutral-500 absolute -bottom-4 -left-6"></div>
      {/* //RoundedBorders */}
      <div className="bg-neutral-800 w-full h-full rounded-lg border-px1 border-neutral-400/50 select-none flex flex-col p-3">
        <h1 className="text-neutral-500 text-xl">Invoice</h1>
        <div className="w-fit h-fit relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-neutral-500">
            Total: 150
          </div>
          <VictoryPie
            innerRadius={100}
            height={250}
            colorScale={["#22c55e", "#6366f1", "#f59e0b"]}
            data={[
              { x: 1, y: 100, label: "income" },
              { x: 2, y: 50, label: "expense" },
              { x: 3, y: 50, label: "difference" },
            ]}
            style={{
              labels: { fill: "transparent" },
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-neutral-500 border-b-px1 border-neutral-500/20 pb-1">
            INCOME: 100
          </p>
          <p className="text-neutral-500 border-b-px1 border-neutral-500/20 pb-1">
            EXPENSE: 50
          </p>
          <p className="text-neutral-500 border-b-px1 border-neutral-500/20 pb-1">
            DIFFERENCE: 50
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceStats;
