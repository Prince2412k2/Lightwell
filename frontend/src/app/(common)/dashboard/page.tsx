"use client";

import { CameraIcon, DatabaseZapIcon, Table } from "lucide-react";
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
export function DonutChart({
  done,
  total,
  color,
  Icon,
}: {
  done: number;
  total: number;
  color: string;
  Icon: React.JSXElement;
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

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

function Notifications() {
  return <DataTable columns={columns} data={payments} />;
}

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
          <div className="w-1/2"></div>
        </div>
        <div className=" flex flex-col justify-center w-1/3 container mx-4 mb-4 text-7xl"></div>
      </div>

      {/* Notifications */}
      <div className="h-3/5 border border-green-400 container m-auto mb-10">
        <Notifications />
      </div>
    </div>
  );
}
