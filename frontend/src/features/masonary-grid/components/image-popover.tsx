import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  DownloadIcon,
  EclipseIcon,
  EllipsisIcon,
  InstagramIcon,
  StarIcon,
} from "lucide-react";

export const ImageMenu = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <EllipsisIcon className="size-10 hover:bg-purple-400/50 dark:text-black dar:bg-white/20 text-white bg-black/20 rounded-full p-1 w-6 h-6 cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="w-15 flex flex-col justify-center items-center gap-2 mx-0 px-0 rounded-md">
          <div className="flex flex-col gap-5">
            <Button className="rounded-full size-8">
              <DownloadIcon />
            </Button>

            <Button className="rounded-full size-8 bg-card text-yellow-500 ring-2 ring-primary/50">
              <StarIcon />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
