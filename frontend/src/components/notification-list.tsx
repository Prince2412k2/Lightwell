import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const ProfileAvatar = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-8 h-8 rounded-full object-cover" />
);

interface Notification {
  profile: string;
  username: string;
  type: "solved" | "pending" | "urgent";
  time: string;
  description: string;
}

const notifications: Notification[] = [
  {
    profile: "/ava.webp",
    username: "John Doe",
    type: "pending",
    time: "2 hours ago",
    description: "New feature released - please review the changes.",
  },
  {
    profile: "/ava.webp",
    username: "Jane Applessed",
    type: "urgent",
    time: "30 minutes ago",
    description: "Server maintenance scheduled for tonight.",
  },
  {
    profile: "/ava.webp",
    username: "Bob Smith",
    type: "solved",
    time: "1 day ago",
    description: "Your subscription is about to expire.",
  },
  {
    profile: "/ava.webp",
    username: "Alice L.",
    type: "pending",
    time: "1 hour ago",
    description: "New login from an unrecognized device.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
  {
    profile: "/ava.webp",
    username: "Charlie W.",
    type: "solved",
    time: "2 days ago",
    description: "Report on Q3 performance is ready.",
  },
];

const getTypeStyles = (type: Notification["type"]) => {
  switch (type) {
    case "solved":
      return "bg-green-50 text-green-700 ring-green-600/20";
    case "pending":
      return "bg-yellow-50 text-yellow-700 ring-yellow-600/20";
    case "urgent":
      return "bg-red-50 text-red-700 ring-red-600/20";
    default:
      return "";
  }
};

export function NotificationList() {
  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-6">
      <div className="border rounded-lg shadow-sm overflow-hidden">
        {/* Scroll container */}
        <div className="h-[60vh] overflow-y-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-background">
              <TableRow>
                <TableHead>Profile</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {notifications.map((notification, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Image
                      className="rounded-full"
                      width={40}
                      height={40}
                      src={notification.profile}
                      alt={notification.username}
                    />
                  </TableCell>

                  <TableCell>{notification.username}</TableCell>

                  <TableCell>
                    <Badge className={getTypeStyles(notification.type)}>
                      {notification.type}
                    </Badge>
                  </TableCell>

                  <TableCell>{notification.time}</TableCell>

                  <TableCell className="max-w-xs truncate">
                    {notification.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
