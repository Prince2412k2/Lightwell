"use client";

import GlassIcon from "@/components/GlassIcons";
import GlassIcons from "@/components/GlassIcons";
import { Card } from "@/components/ui/card";
import {
  BookAIcon,
  CameraIcon,
  CloudIcon,
  DatabaseZapIcon,
  EditIcon,
  FileIcon,
  HeartIcon,
  MousePointerClickIcon,
} from "lucide-react";
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function DonutChart({
  done,
  total,
  color,
  Icon,
}: {
  done: number;
  total: number;
  color: string;
  Icon: JSXElement;
}) {
  const data = [
    { name: "done", value: done },
    { name: "Remaining", value: Math.max(total - done, 0) },
  ];

  return (
    <div className="flex relative w-full h-full ">
      <ResponsiveContainer className="z-10">
        <PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              padding: "8px 12px",
            }}
            itemStyle={{
              color: "hsl(var(--card))",
            }}
          />
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={10}
            dataKey="value"
            cornerRadius={10}
          >
            <Cell fill={color} />
            <Cell fill="var(--secondary)" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none gap-1 ">
        <span className="text-lg font-semibold">
          <Icon stroke={color} />
        </span>
      </div>
    </div>
  );
}

const ChartData = [
  {
    lable: "Storage",
    done: 135,
    total: 500,
    Icon: DatabaseZapIcon,
    color: "var(--primary",
  },
  {
    lable: "Active Projects",
    done: 34,
    total: 43,
    Icon: CameraIcon,
    color: "#FFC107",
  },
];
const items = [
  { icon: <FileIcon />, color: "blue", label: "Files" },
  { icon: <BookAIcon />, color: "purple", label: "Books" },
  { icon: <HeartIcon />, color: "red", label: "Health" },
  { icon: <CloudIcon />, color: "indigo", label: "Weather" },
  { icon: <EditIcon />, color: "orange", label: "Notes" },
];
export default function page() {
  return (
    <div className="flex flex-col flex-5 gap-10">
      {/* Charts */}
      <div className="flex flex-3 gap-2 container m-auto mt-10">
        <div className=" flex flex-2  w-2/3 ">
          <div className=" flex flex-col text-center w-full  container mx-4 mb-4 ">
            <DonutChart
              done={135}
              total={500}
              Icon={DatabaseZapIcon}
              color={"var(--primary)"}
            />
            <div className="">{"storage"}</div>
          </div>
          <div className="w-1/2">
            {items.map((i, index) => (
              <div key={index}>
                <GlassIcon {...i} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col justify-center w-1/3 container mx-4 mb-4 text-7xl"></div>
      </div>

      {/* Notifications */}
      <div className="h-3/5 border border-green-400 container m-auto mb-10"></div>
    </div>
  );
}
