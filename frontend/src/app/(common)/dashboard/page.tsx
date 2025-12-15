"use client";

import { DatabaseZapIcon } from "lucide-react";
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["var(--primary)", "#e0e7ff"]; // primary + background

export function DonutChart({ used, total }: { used: number; total: number }) {
  const data = [
    { name: "Used", value: used },
    { name: "Remaining", value: Math.max(total - used, 0) },
  ];

  return (
    <div className="flex relative w-full h-40 focus:border-none focus:ring-0 focus-visible:ring-0">
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            onClick={() => {}}
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={10}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none gap-1 ">
        <span className="text-lg text-primary font-semibold">
          <DatabaseZapIcon />
        </span>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div className="flex flex-col flex-5 gap-10">
      <div className="flex flex-4 gap-2  border-red-400 border container m-auto mt-10">
        {[1].map((index) => {
          return (
            <div
              key={index}
              className=" flex flex-col text-center w-1/4 border container mx-4 my-4 "
            >
              <DonutChart used={20} total={100} />
              <div className="text-lg"> storage </div>
            </div>
          );
        })}
      </div>
      <div className="h-3/5 border border-green-400 container m-auto mb-10"></div>
    </div>
  );
}
