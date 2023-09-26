import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";

const HeaderStat = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "Invoices",
      },
    ],
    width: 620,
    height: 200,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -20px)",
      },
    },
  };
  const dataset = [
    {
      shopping: 59,
      family: 57,
      gym: 86,
      invoice: 21,
      other: 13,
      month: "Jan",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Fev",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Mar",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Apr",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "May",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "June",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "July",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Aug",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Sept",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Oct",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Nov",
    },
    {
      shopping: 0,
      family: 0,
      gym: 0,
      invoice: 0,
      other: 0,
      month: "Dec",
    },
  ];

  const valueFormatter = (value: number) => `${value}`;

  return (
    <div className="bg-neutral-500/50 rounded-lg flex justify-center items-center m-3 select-none">
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "shopping", label: "Shopping", valueFormatter },
          { dataKey: "family", label: "Family", valueFormatter },
          { dataKey: "gym", label: "Gym", valueFormatter },
          { dataKey: "invoice", label: "Invoice", valueFormatter },
          { dataKey: "other", label: "Other", valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default HeaderStat;
