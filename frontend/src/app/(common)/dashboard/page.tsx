// "use client";
//
// import { NotificationList } from "@/components/notification-list";
// import { DatabaseZapIcon, Table } from "lucide-react";
// import {
//   Tooltip as RechartsTooltip,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";
//
// import React from "react";
// import TaskList from "@/components/tasklist";
// import { No } from "zod/v4/locales";
// export function DonutChart({
//   done,
//   total,
//   color,
//   Icon,
// }: {
//   done: number;
//   total: number;
//   color: string;
//   Icon: React.JSX.Element;
// }) {
//   const data = [
//     { name: "done", value: done },
//     { name: "Remaining", value: Math.max(total - done, 0) },
//   ];
//
//   return (
//     <div className="flex relative w-full h-full ">
//       <ResponsiveContainer className="z-10">
//         <PieChart>
//           <RechartsTooltip
//             contentStyle={{
//               backgroundColor: "var(--card)",
//               borderRadius: "8px",
//               border: "1px solid hsl(var(--border))",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//               padding: "8px 12px",
//             }}
//             itemStyle={{
//               color: "hsl(var(--card))",
//             }}
//           />
//           <Pie
//             data={data}
//             innerRadius="70%"
//             outerRadius="100%"
//             paddingAngle={10}
//             dataKey="value"
//             cornerRadius={10}
//           >
//             <Cell fill={color} />
//             <Cell fill="var(--secondary)" />
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//
//       {/* Centered Text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none gap-1 ">
//         <span className="text-lg font-semibold">
//           <Icon stroke={color} />
//         </span>
//       </div>
//     </div>
//   );
// }
// export default function page() {
//   return (
//     <div className="h-[calc(100vh-6rem)] flex flex-col">
//       {/* Charts */}
//       <div className="flex-[1] flex gap-4 mt-10 px-4">
//         <div className="flex w-2/3">
//           <div className="flex flex-col text-center w-full mx-4 mb-4">
//             <DonutChart
//               done={135}
//               total={500}
//               Icon={DatabaseZapIcon}
//               color={"var(--primary)"}
//             />
//             <div className="mt-2 text-sm text-muted-foreground">Storage</div>
//           </div>
//           <div className="w-1/2" />
//         </div>
//
//         <div className="w-1/3 flex items-center justify-center text-7xl">
//           {/* Big stat */}
//         </div>
//       </div>
//
//       {/* Notifications */}
//       <div className="px-4 pb-2 ">
//         <NotificationList />
//       </div>
//     </div>
//   );
// }
