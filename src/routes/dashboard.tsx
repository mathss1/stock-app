import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "../dataset/cellar.tsx";
import { PieChart } from "@mui/x-charts/PieChart";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

const chartSetting = {
  yAxis: [
    {
      label: "Sales",
      width: 60,
    },
  ],
  height: 300,
};

function RouteComponent() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col w-full items-center justify-between gap-30">
        <div className="w-[85%]">
          <BarChart
            dataset={dataset}
            xAxis={[{ dataKey: "month" }]}
            series={[
              {
                dataKey: "vodka",
                label: "Vodka",
                valueFormatter,
              },
              { dataKey: "whisky", label: "Whisky", valueFormatter },
              { dataKey: "beer", label: "Beer", valueFormatter },
              { dataKey: "wine", label: "Wine", valueFormatter },
            ]}
            {...chartSetting}
          />
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 3900, label: "Profit (Month)" },
                    { id: 1, value: 19500, label: "Sales (Month)" },
                    { id: 2, value: 9750, label: "Expenses (Month)" },
                  ],
                },
              ]}
              width={200}
              height={200}
            />
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 573, label: "18 to 25 years (Month)" },
                    { id: 1, value: 389, label: "26 to 40 years (Month)" },
                    { id: 2, value: 187, label: "40+ years (Month)" },
                  ],
                },
              ]}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
